import React from 'react';
import { Link } from 'react-router-dom/';
import { useAuth } from '../../contexts/auth';
import { Image, Text } from './styles';

const HeroImage: React.FC = () => {
  const { signed, user, signIn } = useAuth();

  console.log(signed);
  console.log(user);

  function handleSignIn() {
    signIn();
  }

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
