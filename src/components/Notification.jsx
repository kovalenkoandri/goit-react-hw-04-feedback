import { Text } from './Feedback.styled';
import PropTypes from 'prop-types';
export const Notification = ({ message, display }) => {
  return !display && <Text>{message}</Text>;
};

Notification.defaultProps = {
  display: false,
};
Notification.propTypes = {
  display: PropTypes.bool.isRequired,
};
