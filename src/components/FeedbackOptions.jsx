import { List, ItemBtn } from './Feedback.styled';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(el => (
        <ItemBtn key={el}>
          <button
            onClick={() => {
              onLeaveFeedback(el);
            }}
          >
            {el}
          </button>
        </ItemBtn>
      ))}
    </List>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};