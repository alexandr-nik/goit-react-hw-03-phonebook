import PropTypes from 'prop-types';
import { FilterBlock, FilterTitle, FilterInput } from './ContactsFilter.styled';
export const ContactsFilter = ({ state: { filter }, filterHandle }) => {
  return (
    <FilterBlock>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Find Name"
        value={filter}
        onChange={filterHandle}
      />
    </FilterBlock>
  );
};
ContactsFilter.propTypes = {
  state: PropTypes.shape({
    filter: PropTypes.string.isRequired,
  }),
  filterHandle: PropTypes.func.isRequired,
};
