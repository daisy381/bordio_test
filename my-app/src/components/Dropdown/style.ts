import styled from 'styled-components';

//images

interface ItemButtonProps {
    isOpen:boolean
}

interface ItemOpenProps {
    maxHeight?:number
}
interface MenuItemProps {
    ref : any
}


export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  background-color: #F5F8FA;
  border: none;
  border-radius: 50px;
  width: 120px;
  cursor: pointer;
  
  &:active,:hover,:focus{
    background-color: #E1E4E7;
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  gap:6px;
`
export const  DropdownIcon = styled.img<ItemButtonProps>`
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const DropdownTitle = styled.p`
  margin:0;
  color: #222222;
  width: auto;
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
`;

export const DropDownListContainer = styled.div<ItemOpenProps>`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap:18px;
  max-height: ${(props) => props.maxHeight + "px"};
  transition: max-height 0.6s ease-in-out;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

export const DropDownList = styled.ul<MenuItemProps>`
  display: flex;
  flex-direction: column;
  padding: 6px;
`;

export const ListItem = styled("li")`
  padding: 7px 12px;
  list-style: none;
  text-align: start;
  
  &:hover{
    background-color: #F5F8FA;
  }
`;