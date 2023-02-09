import styled from 'styled-components';
export const ContactsBlock = styled.div``;
export const ContactsTile = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: center;
`;
export const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
`;
export const ContactsItem = styled.li`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 30px;
`;
export const ContactsText = styled.p`
  font-size: 14px;
  margin: 0;
`;
export const ContactsButton = styled.button`
  width: 50px;
  height: 20px;
  border: none;
  border-radius: 5px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: blue;
    color: white;
  }
`;
