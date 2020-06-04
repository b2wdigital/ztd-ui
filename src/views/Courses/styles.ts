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
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

export const Header = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  .newclass{
    height: 50px;
    margin-right: 70px;
    margin-top: 50px;
  }
`;

export const CourseCard = styled.div`
  align-self: flex-end;
  display: flex;
  margin: 10px;
  width: 420px;
  height: 300px;
  background: linear-gradient(90deg, #84fab0 0%, #8feafe 100%);
  box-shadow: 0px 2px 4px rgba(8, 35, 48, 0.24);
  border-radius: 6px;

  .textbox {
    display: flex;
    align-items: center;
    align-self: flex-end;
    width: 420px;
    height: 120px;
    padding: 20px;
    background: #4aeac4;
    border-radius: 6px;
  }

  h1 {
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    color: #fff;
  }

  a {
    text-decoration: none;
  }
`;
