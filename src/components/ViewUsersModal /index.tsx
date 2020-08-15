import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useAuth } from '../../contexts/auth';
import { ModalBodyStyle } from './styles';
import { Course } from '../../types/course';

type ModalProps = {
  buttonLabel: string;
  className: string;
  courses: Course[];
};

const ViewUsersModal: React.FC<ModalProps> = ({
  buttonLabel,
  className,
  courses,
}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" size="sm" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Feedbacks Dados</ModalHeader>
        <ModalBody>
          <ModalBodyStyle>
            <b>Aulas:</b>
            {courses.map((c) => (
              <ul>
                <li>{c.name}</li>
              </ul>
            ))}
            <ModalFooter />
          </ModalBodyStyle>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ViewUsersModal;
