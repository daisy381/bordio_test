import React from 'react';

//components
import Sidebar from "./components/Sidebar";
import Tools from "./components/Tools";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";

import {
    Main,
    Content
} from "./style";

function App() {
  return (
      <Main>
          <Sidebar/>
          <Tools/>
          <Content>
              <Navbar/>
              <Schedule/>
          </Content>
      </Main>
  );
}

export default App;
