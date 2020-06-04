import styled from 'styled-components';

export const Image = styled.section`
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  height: 100%;
  margin: 0;
  background: linear-gradient(90deg, #c7ccff 0%, #d7fff5 100%);
`;

export const Text = styled.div`
  /* Place text in the middle of the image */
  text-align: center;
  width: 100%;
  position: absolute;
  margin-top: 25%;
  color: black;

  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 10px 25px;
    color: black;
    background-color: #ddd;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: grey;
      color: white;
    }
  }
`;
