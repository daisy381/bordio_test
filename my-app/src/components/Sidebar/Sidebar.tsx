import React, {FC, useState} from 'react';

//assets
import logo from '../../assets/images/bordio-logo.svg';
import WorkspaceLogo from '../../assets/images/workspace-icon.svg'
import items from './mock.json';

import {
    Container,
    LogoContainer,
    InputWrapper,
    Input,
    InputIcon,
    MyWorkspaceWrapper,
    MyWorkspaceIcon,
    MyWorkspaceTitle,
    DropDownsWrapper
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

          <MyWorkspaceWrapper>
              <MyWorkspaceIcon src={WorkspaceLogo} alt="workspace_icon"/>
              <MyWorkspaceTitle>{"My Workspace"}</MyWorkspaceTitle>
          </MyWorkspaceWrapper>

          <DropDownsWrapper>
              {
                  items.map(({title,children},index)=>(
                      <MenuDropdown title={title} items={children} key={index}/>
                  ))
              }
          </DropDownsWrapper>
      </Container>
    );
};

export default Sidebar;
