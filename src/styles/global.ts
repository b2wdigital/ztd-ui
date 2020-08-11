import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style:none;
  }

  .App {
  display: flex;
  width: 100%;
  align-items: stretch;
}

.container {
  padding:3px;
  max-width: 1800px;
}


  body {
    background: #f7f7f7;
    -webkit-font-smoothing: antialiased;
    font-family: Quicksand;
    font-style: normal;
    font-weight: 300;
  }

  button {
    cursor: pointer;
  }

  a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */
.sidebar {
  min-width: 250px;
  max-width: 250px;
  background: #fff;
  color: #000;
  font-style: bold;
  font-size: 30px;
  margin-left: -250px;
  transition: all 0.5s;
}

.sidebar.is-open {
  margin-left: 0;
  transition: 0.5s;
}

.sidebar-header {
  background: #000B76;
  padding-top: 24px;
}

.sidebar-header h3 {
  color: #fff;
  font-size: 20px;
  padding: 1em;
  text-align: center;
}

.sidebar ul p {
  color: #fff;
  padding: 10px;
}

.menu-open {
  background: #000B76;
}

.nav-item:hover {
  color: #FA573C;
  background: #fff;
}

.items-menu {
  color: #fff;
  background: #6d7fcc;
}

li a.dropdown-toggle::after {
  display: inline-flex;
  position: relative;
  left: 30%;
  top: 10%;
}

.sidebar-header > span {
  position: relative;
  float: right;
  margin: 0.5em;
  font-size: 2rem;
  cursor: pointer;
  display: none;
}
.side-menu {
  height: calc(100vh - 130px);
  overflow-y: scroll;
}

.side-menu::-webkit-scrollbar {
  width: 10px;
}

.side-menu::-webkit-scrollbar-thumb {
  background: #5466b3;
  border-radius: 3px;
}

.side-menu::-webkit-scrollbar-thumb:hover {
  background: #3a4c99;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
.content {
  padding: 3px;
  height: 100vh;
}

@media only screen and (max-width: 500px) {
  body {
    overflow: hidden;
  }

  .content.is-open {
    margin-left: 100%;
  }

  .sidebar.is-open {
    min-width: 100%;
    max-width: 100%;
    margin-left: 0;
    transition: all 0.5s, height 0s;
  }

  .sidebar.is-open > .sidebar-header span {
    display: unset;
  }

  li a.dropdown-toggle::after {
    display: inline-block;
    position: relative;
    left: 68%;
  }
`;
