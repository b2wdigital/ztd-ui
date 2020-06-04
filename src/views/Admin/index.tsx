import React from 'react';
import { Container } from 'reactstrap';
import Routes from '../../routes';

const Admin: React.FC = () => {
  return (
    <>
      <Container fluid className="content">
        <Routes />
      </Container>
    </>
  );
};

export default Admin;
