import React, { FC } from 'react';

//assets
import logo from '../../assets/images/bordio-logo.svg';
import items from './mock.json';

import {
    Container,
    LogoContainer,
    InputWrapper,
    Input,
    InputIcon,
    MenuDropdownWrapper
} from "./style";
import MenuDropdown from "../MenuDropdown";

interface SidebarProps {
    children? : React.ReactNode;
}


const Sidebar: FC<SidebarProps> = () => {

    return (
      <Container>
          <LogoContainer src={logo} alt="logo"/>
          <InputWrapper>
              <Input  placeholder="Search ..."/>
              <InputIcon/>
          </InputWrapper>

          {
              items.map(({title,children},index)=>(
                  <MenuDropdown title={title} items={children} key={index}/>
              ))
          }


      </Container>
    );
};

export default Sidebar;
