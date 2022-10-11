import { List, ItemBtn } from './Feedback.styled';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ stateKeys, increment }) => {
  return (
    <List>
      {stateKeys.map(el => (
        <ItemBtn key={el}>
          <button
            onClick={() => {
              increment(el);
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
  stateKeys: PropTypes.arrayOf(PropTypes.string.isRequired),
  increment: PropTypes.func.isRequired,
};