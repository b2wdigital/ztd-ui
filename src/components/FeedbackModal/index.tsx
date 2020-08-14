import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import { useForm } from 'react-hook-form';
import { ButtonStyle } from './styles';
import api from '../../services/api';
import { useAuth } from '../../contexts/auth';

type ModalProps = {
  buttonLabel: string;
  className: string;
  course_id: string;
  course_name: string;
};

type Inputs = {
  gradeFeedback: number;
  positive: string;
  negative: string;
};

const FeedbackModal: React.FC<ModalProps> = ({
  buttonLabel,
  className,
  course_id,
  course_name,
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { user } = useAuth();

  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onSubmit = handleSubmit(({ gradeFeedback, positive, negative }) => {
    const createFeedback = async () => {
      try {
        const { data } = await api.post('/feedbacks', {
          id_user: user?._id,
          id_course: course_id,
          grade: gradeFeedback,
          positiveFeedback: positive,
          negativeFeedback: negative,
        });
      } catch (e) {
        console.log(e);
      }
    };
    createFeedback();
    toggle();
  });

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{course_name}</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="exampleSelect">Nota</Label>
              <Input
                type="select"
                name="gradeFeedback"
                id="grade"
                innerRef={register({ required: true })}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">O que você mais gostou? :)</Label>
              <Input
                type="textarea"
                name="positive"
                id="positive"
                innerRef={register({ required: true })}
              />
              {errors.positive && <span>Esse campo é obrigatório!</span>}
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">O que pode melhorar?</Label>
              <Input
                type="textarea"
                name="negative"
                id="negative"
                innerRef={register({ required: true })}
              />
              {errors.negative && <span>Esse campo é obrigatório!</span>}
            </FormGroup>
            <ButtonStyle>
              <Button style={{ background: '#fa573c' }}>Submit</Button>
            </ButtonStyle>
          </Form>
          <ModalFooter />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default FeedbackModal;
