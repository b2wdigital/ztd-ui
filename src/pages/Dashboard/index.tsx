import React, { useState, useEffect } from 'react';
import { CardBody, Card } from 'reactstrap';
import { Title, Header } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <Title> Infos </Title>
      </Header>
      <Card>
        <h1> Tópicos Abordados </h1>
        <CardBody>Camila</CardBody>
      </Card>
    </>
  );
};

export default Dashboard;
