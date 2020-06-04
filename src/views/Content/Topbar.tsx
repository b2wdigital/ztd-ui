import React, { useState } from 'react';
import { Navbar, Button, NavbarToggler, Collapse, Nav } from 'reactstrap';

type TopbarTypes = {
  toggleSidebar: () => void;
};

const Topbar: React.FC<TopbarTypes> = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <>
      {/* <Button color="info" onClick={toggleSidebar}>
        Menu
      </Button> */}
    </>
  );
};

export default Topbar;
