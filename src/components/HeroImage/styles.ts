import styled from 'styled-components';

export const Text = styled.div`
  /* Place text in the middle of the image */
  text-align: left;
  position: absolute;
  margin-top: 20%;
  color: black;
  grid-area: login;
  display: inline-grid;
  h1 {
    font-size: 80px;
    font-weight: 600;
    color: #fa573c;
  }
  p {
    text-align: center;
    font-size: 20px;
  }
  button {
    border: none;
    border-radius: 15px;
    outline: 0;
    padding: 10px 25px;
    background-color: #0e3476;
    color: white;
    text-align: center;
    cursor: pointer;
  }
`;

export const Box = styled.div``;
