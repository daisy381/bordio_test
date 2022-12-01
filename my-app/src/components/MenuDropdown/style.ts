import styled from 'styled-components';

import arrow from '../../assets/images/Arrows.svg';

interface ItemOpenProps {
    isOpen:boolean
}

export const Container = styled.div`
  width: 100%;
`;

export const ContainerItem = styled.div`
    color: #8C939F;
`;

export const MenuItemWrapper = styled.div<ItemOpenProps>`
  display: flex;
  flex-direction: column;
  gap:18px;
  max-height: ${(props) => (props.isOpen ? '200px' : '0px')};
  transition: all 0.4s ease-in-out;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: start;
  margin: 10px 0;
  gap:8px;
`

export const TitleButton = styled.button<ItemOpenProps>`
  align-items: center;
  height: 26px;
  width: 26px;
  background: transparent url(${arrow}) no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  // transform: ${props => props.isOpen ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

export const TitleContent = styled.h5`
  margin: 16px 0;
  color: white;
  width: auto;
  height: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 16px;
`;