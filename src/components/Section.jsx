import PropTypes from 'prop-types';
export const Section = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// PropTypes.node: any render-able value like numbers and string, that can actually be rendered on screen.