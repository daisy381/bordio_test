import styled from 'styled-components';

//icons
import searchIcon from '../../assets/images/Search.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px 16px;
  background-color: #0F1D40;
  width: 20%;
  height: auto;
`;

export const LogoContainer = styled.img`
  margin-bottom: 30px;
  height: 32px;
  width: 131px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: 2px;
`;

export const Input = styled.input`
  padding: 9px 10px;
  background-color: #2D4071;
  border:none;
  border-radius: 4px;
  color:#fff;
  width: 100%;

  &::placeholder {
    color: #8C939F;
  }
  
  &:focus {
    box-shadow: 0 0 3px 0 #8C939F;
    border-color: #8C939F;
    outline: none;
  }
`;

export const InputIcon = styled.button`
  position: absolute;
  height: 16px;
  width: 16px;
  right: 8px;
  top: 28%;
  background-size: contain;
  border: none;
  background: transparent url(${searchIcon});
  cursor: pointer;
  opacity: 0.7;
`;


export const MenuDropdownWrapper = styled.ul`
  //display: flex;
  //flex-direction: column;
  //gap:10px;
`;