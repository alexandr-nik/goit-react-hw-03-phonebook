import PropTypes from 'prop-types';
import {
  ContactsBlock,
  ContactsList,
  ContactsItem,
  ContactsText,
  ContactsButton,
} from './Contacts.styled';

export const Contacts = ({ contacts, onClickDelete }) => {
  return (
    <ContactsBlock>
      <ContactsList>
        {contacts.map((item) => {
          return (
            <ContactsItem key={item.id}>
              <ContactsText>{item.name}</ContactsText>
              <ContactsText>{item.number}</ContactsText>
              <ContactsButton
                type="button"
                value={item.id}
                onClick={e => onClickDelete(e, item.id)}
              >
                delete
              </ContactsButton>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </ContactsBlock>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
