import styled from 'styled-components';
import searchIcon from "../../assets/images/Search.svg";

interface ImageProps {
    width:number,
    height:number
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: white;
  box-shadow: 0 2px 4px #F0F1F2;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  padding: 20px;
  display: inherit;
  gap: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileWrapper = styled.div`
  padding: 20px;
  display: inherit;
  gap: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 180px;
  height:40px;
  display: flex;
`;

export const Search = styled.input`
  padding: 9px 12px;
  background-color: #F5F8FA;
  border:none;
  color:#fff;
  width: 100%;
  border-radius: 50px;

  &::placeholder {
    color: #8C939F;
  }
  
  &:focus {
    box-shadow: 0 0 3px 0 #8C939F;
    border-color: #8C939F;
    outline: none;
  }
`;

export const SearchIcon = styled.button`
  position: absolute;
  height: 16px;
  width: 16px;
  right: 20px;
  top: 28%;
  background-size: contain;
  border: none;
  background: transparent url(${searchIcon});
  cursor: pointer;
  opacity: 0.7;
`;

export const IconContainer = styled.img<ImageProps>`
  width:${props => props.width +'px'};
  height: ${props => props.height +'px'};
`;

export const BadgeWrapper = styled.div`
    position:relative;
`;


export const BadgeContainer = styled.div`
  display: flex;
  position: absolute;
  right: -10px;
  top: -6px;
  background-color: red;
  width: 22px;
  height: 16px;
  border-radius: 4px;
`;

export const BadgeText = styled.p`
  padding: 2px;
  text-align: center;
  margin: auto;
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 11px;
  color: white;
`;