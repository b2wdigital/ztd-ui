import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useAuth } from '../../contexts/auth';
import { ModalBodyStyle } from './styles';

type ModalProps = {
  buttonLabel: string;
  className: string;
  grade: number[];
  positiveFeedbacks: string[];
  negativeFeedbacks: string[];
};

const ViewFeedbacksModal: React.FC<ModalProps> = ({
  buttonLabel,
  className,
  grade,
  positiveFeedbacks,
  negativeFeedbacks,
}) => {
  const { user } = useAuth();
  const [modal, setModal] = useState(false);
  const [feedback, setFeedback] = useState();

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" size="sm" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Curso</ModalHeader>
        <ModalBody>
          <ModalBodyStyle>
            <b>Notas:</b>
            {grade.map((g) => (
              <ul>
                <li>{g}</li>
              </ul>
            ))}
            <b>O que mais gostaram:</b>
            {positiveFeedbacks.map((g) => (
              <ul>
                <li>"{g}" </li>
              </ul>
            ))}
            <b>O que pode melhorar?</b>
            {negativeFeedbacks.map((g) => (
              <ul>
                <li>"{g}" </li>
              </ul>
            ))}
            <ModalFooter />
          </ModalBodyStyle>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ViewFeedbacksModal;
