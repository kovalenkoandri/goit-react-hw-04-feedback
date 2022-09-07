import styled from 'styled-components';
export const Section = styled.div`
  font-size: 30px;
`;
export const List = styled.ul`
  list-style: none;
  font-size: 16px;
`;
  export const ItemBtn = styled.li`
    display: inline-block;
    margin-right: 10px;
    &:nth-of-type(3) {
      margin-right: 0;
    }
  `;
export const ItemStat = styled.li`
  margin-bottom: 10px;
  &:nth-of-type(5) {
    margin-bottom: 0;
  }
`;
export const Rating = styled.span``;