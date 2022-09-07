import { ItemStat, Rating, List } from './Feedback.styled';
export const StatisticsComponent = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  display,
}) => {
  return (
    display && (
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
    )
  );
};

