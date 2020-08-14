import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FeedbackForm from './FeedbackView';
import api from '../../services/api';
import { useAuth } from '../../contexts/auth';
import { Course } from '../../types/course';

type ModalProps = {
  buttonLabel: string;
  className: string;
  course_id: string;
  course_name: string;
};

type Feedback = {
  grade: number;
  positiveFeedback: string;
  negativeFeedback: string;
};
const ViewFeedbackModal: React.FC<ModalProps> = ({
  buttonLabel,
  className,
  course_id,
  course_name,
}) => {
  const { user } = useAuth();
  const [modal, setModal] = useState(false);
  const [feedback, setFeedback] = useState();

  const toggle = () => setModal(!modal);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const { data } = await api.get(
          `/feedbacks/by_course/${course_id}/${user?._id}`,
        );
        setFeedback(data);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
    getCourse();
  }, [modal]);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{course_name}</ModalHeader>
        <ModalBody>
          {feedback?.map((f: Feedback) => (
            <div style={{ textAlign: 'center' }}>
              <h5>Nota</h5>
              {f.grade}
              <h5>O que eu mais gostei</h5>
              {f.positiveFeedback}
              <h5>O que poderia melhorar</h5>
              {f.negativeFeedback}
            </div>
          ))}
          <ModalFooter />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ViewFeedbackModal;
