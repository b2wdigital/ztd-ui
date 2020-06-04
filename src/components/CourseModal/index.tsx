import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CourseForm from './CourseForm';

type ModalProps = {
  buttonLabel: string;
  className: string;
};

const CourseModal: React.FC<ModalProps> = ({ buttonLabel, className }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="secondary" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Nova Matéria</ModalHeader>
        <ModalBody>
          <CourseForm />
          <ModalFooter />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CourseModal;
