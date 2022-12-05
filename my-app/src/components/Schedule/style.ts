import styled from 'styled-components';

interface ItemProps  {
    color?:string,
    status?:string
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
`;


export const ColumnTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  background-color: white;
  border-bottom: 1px solid  #F3F3F3;
  font-family: 'Roboto-Regular';
  font-style: normal;
`;

export const ColumnGrid = styled.div`
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid #F3F3F3;
  width: 250px;
  justify-content: space-between;
  
`;

export const Column = styled.div`
  background-color: white;
  display: flex;
  flex-direction:column;
  gap:10px;
  align-items: center;
  justify-content: start;
  color: #222222;
`;

export const ScheduleItemWrapper = styled.div<ItemProps>`
  background-color: ${(props)=> props.status === "completed" ? "#F0F0F0": props.color};
  padding:15px;
  width: 90%;
  height: fit-content;
  border-radius: 8px;
  cursor: pointer;
`;

export const ScheduleItemDesc = styled.div<ItemProps>`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration: ${props => props.status === "completed" ? "line-through" : "noe"};
  color: ${props => props.status === 'completed' ? "#A5A5A5" : "#222"};
  padding-bottom: 3px;
`;

export const ScheduleItemHours = styled.div<ItemProps>`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.status === 'completed' ? "#A5A5A5" : "#435E52"};
`;