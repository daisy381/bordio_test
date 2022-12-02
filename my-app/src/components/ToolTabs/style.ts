import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: row;
  gap:14px;
  align-items: center;
  cursor: pointer;
  width: 60%;
  text-align: center;
  padding: 18px 14px;
  position: relative;
  transition: .4s;
  
  &:before{
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: #dfe2ea;
    border-radius: 0 8px 8px 0;
    opacity: 0;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  &:not(.active):hover:before{
    opacity: 1;
    bottom: 0;
    
  }
  
  

  &.active:before{
    opacity: 1;
    bottom: 0;
    background-color: #0094FF;
  }

  &.active{
    background-color: white;
    border-radius: 0 8px 8px 0;
  }
`;


export const Indicator = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  -webkit-transition: .4s;
  transition: .4s;
  height: 5px;
  z-index: 1;
  border-radius: 8px 8px 0 0;
`

export const TabIcon = styled.img`
  height: 22px;
  width:22px;

  &.active{
    fill: blue;
  }
`;

export const TabTitle = styled.h3`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  transition: .4s;

  &:hover{
    color: #0094FF;
  }

  &.active{
    color: #0094FF;
  }
`;
