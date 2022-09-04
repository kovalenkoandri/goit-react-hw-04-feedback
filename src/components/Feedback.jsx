import PropTypes from 'prop-types';
import { Text, List, ItemBtn, ItemStat, Rating } from './Feedback.styled';
const Feedback = () => {
  return (
    <>
      <Text>Please leave feedback</Text>
      <List>
        <ItemBtn>
          <button>Good</button>
        </ItemBtn>
        <ItemBtn>
          <button>Neutral</button>
        </ItemBtn>
        <ItemBtn>
          <button>Bad</button>
        </ItemBtn>
      </List>
      <Text>Statistics</Text>
      <List>
        <ItemStat>
          <Rating>Good: </Rating>
          <Rating></Rating>
        </ItemStat>
        <ItemStat>
          <Rating>Neutral: </Rating>
          <Rating></Rating>
        </ItemStat>
        <ItemStat>
          <Rating>Bad: </Rating>
          <Rating></Rating>
        </ItemStat>
      </List>
    </>
  );
};
export default Feedback;
