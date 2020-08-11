import React, { useEffect } from 'react';
import { Link } from 'react-router-dom/';
import { useAuth } from '../../contexts/auth';
import { Image, Text } from './styles';
import api from '../../services/api';

const HeroImage: React.FC = () => {
  function handleSignIn(): void {
    window.open('http://localhost:3333/auth/google', '_self');
  }
  const { signed, user, signIn } = useAuth();

  console.log(signed);
  console.log(user);

  useEffect(() => {
    signIn();
  }, []);

  return (
    <>
      <Image>
        <Text>
          <h1> Zero to Dev </h1>
          <p>Bem vindo a sua jornada de programação </p>
          <button type="button" onClick={handleSignIn}>
            Sign In
          </button>
        </Text>
      </Image>
    </>
  );
};

export default HeroImage;
