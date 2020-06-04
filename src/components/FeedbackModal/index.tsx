import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FeedbackForm from './FeedbackForm';

type ModalProps = {
  buttonLabel: string;
  className: string;
  course_id: string;
  course_name: string;
};

const FeedbackModal: React.FC<ModalProps> = ({
  buttonLabel,
  className,
  course_id,
  course_name,
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{course_name}</ModalHeader>
        <ModalBody>
          <FeedbackForm idCourse={course_id} />
          <ModalFooter />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default FeedbackModal;
