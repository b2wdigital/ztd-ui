import styled from 'styled-components';
import img from '../../images/coding.svg';

export const Content = styled.div`
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 80%;
  grid-area: imagem;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'imagem login';
`;
