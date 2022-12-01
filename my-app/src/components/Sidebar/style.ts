import styled from 'styled-components';

//icons
import searchIcon from '../../assets/images/Search.svg';

export const Container = styled.div`
  padding-top: 26px;
  display: flex;
  flex-direction: column;
  gap :19px;
  background-color: #0F1D40;
  width: 20%;
  height: auto;
`;

export const LogoContainer = styled.img`
  padding-left:16px;
  height: 32px;
  width: 131px;
`;

export const InputWrapper = styled.div`
  padding: 0 16px;
  position: relative;
  width: auto;
  display: flex;
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
  right: 26px;
  top: 28%;
  background-size: contain;
  border: none;
  background: transparent url(${searchIcon});
  cursor: pointer;
  opacity: 0.7;
`;

export const MyWorkspaceWrapper = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: start;
  gap:8px;
  cursor: pointer;
  background-color: #2D4071;;

`;

export const MyWorkspaceIcon = styled.img`
  height: 28px;
  width: 28px;
`;

export const MyWorkspaceTitle = styled.div`
  margin: 16px 0;
  color: white;
  width: auto;
  height: 16px;
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
`;

export const DropDownsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;