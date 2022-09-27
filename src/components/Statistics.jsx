import { ItemStat, Rating, List } from './Feedback.styled';
import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <ItemStat>
        <Rating>Good: {good}</Rating>
      </ItemStat>
      <ItemStat>
        <Rating>Neutral: {neutral}</Rating>
      </ItemStat>
      <ItemStat>
        <Rating>Bad: {bad}</Rating>
      </ItemStat>
      <ItemStat>
        <Rating>Total: {total}</Rating>
      </ItemStat>
      <ItemStat>
        <Rating>Positive: {positivePercentage}%</Rating>
      </ItemStat>
    </List>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
