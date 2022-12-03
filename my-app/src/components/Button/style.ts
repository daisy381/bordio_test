import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6px;
  align-items: center;
  background-color: #0094FF;
  border: none;
  border-radius: 50px;
  width: 120px;
  cursor: pointer;
`;

export const ButtonIcon = styled.img`
  width: 10px;
  height: 10px;
`;
export const ButtonContent = styled.p`
  margin:0;
  color: white;
  width: auto;
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
`;