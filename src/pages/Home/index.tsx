import React from 'react';
import HeroImage from '../../components/HeroImage';
import { Content, Layout } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <Content />
        <HeroImage />
      </Layout>
    </>
  );
};

export default Home;
