import styled from 'styled-components';
import { Link } from 'react-router-dom';

//images
import arrow from '../../assets/images/Arrows.svg';
//types
import {ItemButtonProps, ItemOpenProps, MenuItemProps} from "./types";

export const Container = styled.div`
  padding: 0 16px;
  width: auto;
`;

export const MenuItem = styled.ul<MenuItemProps>`
  display: flex;
  flex-direction: column;
`;

export const LinkContainer = styled(Link)`
  padding: 8px;
  color: #8C939F;
  cursor: pointer;
  text-decoration: none;

  &:hover{
    opacity: 0.6;
  }
  
  &:active{
    color:white;
  }
  
`;

export const MenuItemWrapper = styled.div<ItemOpenProps>`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap:18px;
  max-height: ${(props) => props.maxHeight + "px"};
  transition: max-height 0.6s ease-in-out;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: start;
  gap:8px;
`

export const TitleButton = styled.button<ItemButtonProps>`
  align-items: center;
  height: 26px;
  width: 26px;
  background: transparent url(${arrow}) no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const TitleContent = styled.p`
  margin:0;
  color: white;
  width: auto;
  height: 16px;
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
`;