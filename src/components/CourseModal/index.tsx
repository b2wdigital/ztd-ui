import React, { useState, useEffect } from 'react';
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
  Alert,
} from 'reactstrap';
import { useForm } from 'react-hook-form';
import { ButtonStyle } from './styles';
import api from '../../services/api';
import { User } from '../../types/user';

type ModalProps = {
  buttonLabel: string;
  className: string;
};

type Inputs = {
  courseName: string;
  courseUrlDoc: string[];
  courseExtra: string;
  courseGoals: string;
  courseTopicCovered: string;
  courseInstructorsId: string[];
};

const CourseModal: React.FC<ModalProps> = ({ buttonLabel, className }) => {
  const [modal, setModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [instructors, setInstructors] = useState<User[]>([]);

  const onDismiss = () => setVisible(false);
  const toggle = () => setModal(!modal);
  const showSuccessWarning = () => setVisible(!visible);

  useEffect(() => {
    const listInstructors = async () => {
      try {
        const { data } = await api.get('/users/instructors');
        setInstructors(data);
      } catch (e) {
        console.error(e);
      }
    };
    listInstructors();
  }, []);

  const { register, handleSubmit, control, errors } = useForm<Inputs>();
  const onSubmit = handleSubmit(
    ({
      courseName,
      courseUrlDoc,
      courseExtra,
      courseGoals,
      courseTopicCovered,
      courseInstructorsId,
    }) => {
      const createFeedback = async () => {
        try {
          const { data } = await api.post('/courses', {
            name: courseName,
            urlDoc: courseUrlDoc,
            extra: courseExtra,
            goals: courseGoals,
            topicsCovered: courseTopicCovered,
            instructors_id: courseInstructorsId,
          });
        } catch (e) {
          console.error('Erro!!', e);
        }
        toggle();
        showSuccessWarning();
      };
      createFeedback();
    },
  );

  return (
    <div>
      <Alert color="success" isOpen={visible} toggle={onDismiss}>
        Aula Criada!
      </Alert>
      <Button color="secondary" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Nova Aula</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="NomeCurso">Nome da Aula</Label>
              <Input
                name="courseName"
                id="courseName"
                placeholder="Digite o nome da Aula"
                innerRef={register({ required: true })}
              />
              {errors.courseName && <span>O nome é obrigatório!</span>}
            </FormGroup>
            <FormGroup>
              <Label for="courseInstructorsId">Instrutores</Label>
              <Input
                type="select"
                name="courseInstructorsId"
                id="courseInstructorsId"
                innerRef={register}
                multiple
              >
                {instructors?.map((i) => (
                  <option value={i._id}> {i.name} </option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="UrlDoc">Link Drive</Label>
              <Input
                name="courseUrlDoc"
                id="courseUrlDoc"
                placeholder="Digite o link do drive"
                innerRef={register}
              />
            </FormGroup>
            <FormGroup>
              <Label for="courseGoals">Objetivos</Label>
              <Input
                type="textarea"
                name="courseGoals"
                id="courseGoals"
                placeholder="Digite os objetivos do curso"
                innerRef={register}
              />
            </FormGroup>
            <FormGroup>
              <Label for="courseTopicCovered">Tópicos a Serem Abordados</Label>
              <Input
                type="textarea"
                name="courseTopicCovered"
                id="courseTopicCovered"
                placeholder="Digite os tópicos a serem abordados"
                innerRef={register}
              />
            </FormGroup>
            <FormGroup>
              <Label for="courseExtra">Extra</Label>
              <Input
                type="textarea"
                name="courseExtra"
                id="courseExtra"
                placeholder="Digite alguns tópicos extras"
                innerRef={register}
              />
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

export default CourseModal;
