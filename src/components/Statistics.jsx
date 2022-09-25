import { ItemStat, Rating, List } from './Feedback.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  display,
}) => {
  console.log(display);
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

