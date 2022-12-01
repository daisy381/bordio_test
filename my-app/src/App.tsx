import React from 'react';

//components
import Sidebar from "./components/Sidebar";

import {
    Main,
    Content
} from "./style";

function App() {
  return (
      <Main>
          <Sidebar/>
          <Content>
              {/*<Navbar/>*/}
              {/*<Schedule/>*/}
          </Content>
      </Main>
  );
}

export default App;
