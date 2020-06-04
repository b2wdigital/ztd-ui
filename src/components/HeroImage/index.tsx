import React from 'react';
import { Link } from 'react-router-dom/';
import { Image, Text } from './styles';

const HeroImage: React.FC = () => {
  return (
    <>
      <Image>
        <Text>
          <h1> Zero to Dev </h1>
          <p>Bem vindo a sua jornada de programação </p>
          <button type="submit">
            <a href="/admin">Acessar</a>
          </button>
        </Text>
      </Image>
    </>
  );
};

export default HeroImage;
