import React, { useEffect } from 'react';
import { Link } from 'react-router-dom/';
import { useAuth } from '../../contexts/auth';
import { Text, Box } from './styles';
import api from '../../services/api';
import homeImage from '../../images/3911318.jpg';

const HeroImage: React.FC = () => {
  function handleSignIn(): void {
    window.open('http://localhost:3333/auth/google', '_self');
  }
  const { signed, user, signIn } = useAuth();

  useEffect(() => {
    signIn();
  }, []);

  return (
    <>
      <Box>
        <Text>
          <h1> Zero to Dev </h1>
          <p>Sua jornada de programação começa aqui</p>
          <button type="button" onClick={handleSignIn}>
            Entrar
          </button>
        </Text>
      </Box>
    </>
  );
};

export default HeroImage;
