import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

type AccordionProps = {
  title: string;
  body: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Button
        color="info"
        onClick={toggle}
        style={{ marginBottom: '1rem', width: '100%' }}
      >
        {title}
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>{body}</CardBody>
        </Card>
      </Collapse>
    </>
  );
};

export default Accordion;
