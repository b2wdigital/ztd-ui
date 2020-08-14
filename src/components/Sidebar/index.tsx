import React from 'react';
import { NavItem, NavLink, Nav, Collapse } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Info } from './styles';
import { useAuth } from '../../contexts/auth';

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};
const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  const { user, signed, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.open('http://localhost:3333/auth/logout', '_self');
  };

  return (
    <div className={classNames('sidebar', { 'is-open': isOpen })}>
      <div className="sidebar-header">
        <Info>
          <img
            src={user?.profileUrl}
            alt="imagem de perfil do usuário logado"
          />
          <h3>{user?.name}</h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L205.7,256L411.4,224L617.1,288L822.9,224L1028.6,192L1234.3,256L1440,160L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z"
            />
          </svg>
        </Info>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem>
            <NavLink tag={Link} to="/">
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/courses">
              Cursos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/feedbacks">
              Feedback
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/feedbacks/given">
              Feedbacks Dados
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={handleLogout} tag={Link} to="/">
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
