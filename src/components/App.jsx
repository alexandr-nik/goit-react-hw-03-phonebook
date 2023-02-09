import { Component } from 'react';
import { ContactsForm } from './ContactForm';
import { Contacts } from './Contacts';
import { AppBlock } from './App.styled';
import { Section } from './Section';
import { ContactsFilter } from './ContactsFilter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  filterHandle = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  onClickDelete = (e, id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(elem => elem.id !== id),
    }));
  };
  addContact = newContact => {
    const { contacts } = this.state;
    const newName = newContact.name;
    if (contacts.filter(elem => elem.name === newName).length) {
      alert(`${newName} is alredy in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };
  findFilterContact = () => {
    const { filter, contacts } = this.state;
    const filterName = filter.trim().toLowerCase();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(filterName)
    );
  };
  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }
  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  render() {
    const {
      state,
      filterHandle,
      addContact,
      onClickDelete,
      findFilterContact,
    } = this;
    return (
      <AppBlock>
        <ContactsForm state={state} addContact={addContact} />
        <Section title="Contacts">
          <ContactsFilter state={state} filterHandle={filterHandle} />
          <Contacts
            contacts={findFilterContact()}
            onClickDelete={onClickDelete}
          />
        </Section>
      </AppBlock>
    );
  }
}
