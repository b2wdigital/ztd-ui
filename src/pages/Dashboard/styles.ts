import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 30px;
  margin-left: 70px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 80px;
  display: flex;
  align-items: center;
  letter-spacing: -1.5px;
  color: #fa573c;
`;

export const Section = styled.section`
  display: grid;
  row-gap: 20px;
  margin-left: 70px;
`;

export const Header = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const FeedbackCard = styled.div`
  max-width: 700px;
  .textbox {
    display: flex;
    align-items: center;
    align-self: flex-end;
    justify-content: space-between;
    margin-top: 10px;
    height: 60px;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(8, 35, 48, 0.24);
    border-radius: 6px;
  }

  span {
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 45px;
    color: #363636;
  }

  a {
    text-decoration: none;
  }
`;
