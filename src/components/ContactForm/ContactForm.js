import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Phonebook,
  PhonebookTitle,
  PhonebookForm,
  PhonebookLable,
  PhonebookInput,
  PhonebookButton,
} from './ContactForm.styled';
export class ContactsForm extends Component {
  state = {
    addName: '',
    addNumber: '',
  };
  inputHandle = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  formSubmit = e => {
    e.preventDefault();
    const { addContact } = this.props;
    const { addName, addNumber } = this.state;
    const { contacts } = this.props.state;
    const newContact = {
      id: nanoid(),
      name: addName,
      number: addNumber,
    };
    const newName = newContact.name.toLowerCase()
     if (contacts.filter(elem => elem.name.toLowerCase() === newName).length) {
      alert(`${newName} is alredy in contacts`);
      return;
    }
    addContact(newContact);   
         this.setState({
          addName: '',
          addNumber: '',
        });
   };
  render() {
    const { addName, addNumber } = this.state;
    return (
      <Phonebook>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <PhonebookForm onSubmit={this.formSubmit}>
          <PhonebookLable>
            Name
            <PhonebookInput
              type="text"
              name="addName"
              placeholder="Name  Surname"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={addName}
              onChange={this.inputHandle}
            />
          </PhonebookLable>
          <PhonebookLable>
            Phone
            <PhonebookInput
              type="tel"
              name="addNumber"
              placeholder="123-45-67"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={addNumber}
              onChange={this.inputHandle}
            />
          </PhonebookLable>
          <PhonebookButton type="submit">Add contact</PhonebookButton>
        </PhonebookForm>
      </Phonebook>
    );
  }
}
