import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Sidebar from './components/Sidebar';
import Content from './views/Content';
import GlobalStyle from './styles/global';
import store from './store';

const App: React.FC = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App wrapper">
            <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <Content
              toggleSidebar={toggleSidebar}
              sidebarIsOpen={sidebarIsOpen}
            />
          </div>
        </BrowserRouter>
        <GlobalStyle />
      </Provider>
    </>
  );
};
export default App;
