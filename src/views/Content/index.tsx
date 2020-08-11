import React from 'react';
import { Container, Button } from 'reactstrap';
import Topbar from './Topbar';
import AuthRoutes from '../../routes/auth.routes';

type ContentProps = {
  sidebarIsOpen: boolean;
  toggleSidebar: () => void;
};

const Content: React.FC<ContentProps> = ({ toggleSidebar, children }) => (
  <>
    <Button
      style={{
        background: '#0e3476',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '50px',
        fontWeight: 'bold',
        borderRadius: '0px',
      }}
      onClick={toggleSidebar}
    >
      M
      <br />
      E
      <br />
      N
      <br />
      U
      <br />
    </Button>
    <Container>
      <AuthRoutes />
    </Container>
  </>
);

export default Content;
