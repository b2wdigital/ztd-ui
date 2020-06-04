import styled from 'styled-components';

// export const Title = styled.h1`
//   margin-top: 30px;
//   margin-left: 70px;
//   font-family: Quicksand;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 64px;
//   line-height: 80px;
//   display: flex;
//   align-items: center;
//   letter-spacing: -1.5px;
//   color: #fa573c;
// `;

export const Section = styled.section`
  display: flex;

  .infos {
    flex: 1;
    padding: 20px;
    .btn-info {
      margin-top: 16px;
    }
  }
  .notes {
    flex: 2;
    padding: 20px;
    h1 {
      margin: 10px;
      color: '#fa573c';
    }
    .card {
      margin-bottom: 16px;
      top: -100px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  /* align-content: flex-end; */
  justify-content: flex-end;
  height: 300px;
  background: linear-gradient(90deg, #84fab0 0%, #8feafe 100%);
  h1 {
    color: #fff;
    font-weight: 600;

    margin-left: 50px;
    margin-bottom: 50px;
  }
  .newclass {
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

  a {
    text-decoration: none;
  }
`;
