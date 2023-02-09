import styled from 'styled-components';
export const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const FilterTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`;
export const FilterInput = styled.input`
  width: 200px;
  padding-left: 3px;
  border-radius: 3px;
  border: none;
  outline: 1px solid back;
  &:hover,
  &:focus {
    outline: 1px solid blue;
  }
`;
