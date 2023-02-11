import styled from 'styled-components';
export const Phonebook = styled.div``;
export const PhonebookTitle = styled.h1`
  text-align: center;
  font-size: 25px;
  margin: 0;
  margin: 20px 0;
`;
export const PhonebookForm = styled.form`
  width: 350px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 8px 8px 24px 0px rgb(12 12 12 / 13%);
`;
export const PhonebookLable = styled.label`
  font-size: 16px;
`;
export const PhonebookInput = styled.input`
  margin-left: 10px;
  padding-left: 3px;
  border-radius: 3px;
  border: none;
  outline: 1px solid back;
  &:hover,
  &:focus {
    outline: 1px solid blue;
  }
`;
export const PhonebookButton = styled.button`
  width: 100px;
  padding: 5px;
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
