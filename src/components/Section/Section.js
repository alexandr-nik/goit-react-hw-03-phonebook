import PropTypes from 'prop-types';
import { SectionTitle, SectionBlock } from './Section.styled';
export const Section = props => {
  return (
    <SectionBlock>
      {props.title && <SectionTitle>{props.title}</SectionTitle>}
      {props.children}
    </SectionBlock>
  );
};
Section.propTypes = {
  props: PropTypes.exact({
    title: PropTypes.string,
  }),
};
