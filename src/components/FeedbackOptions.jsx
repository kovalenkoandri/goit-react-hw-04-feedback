import { List, ItemBtn } from './Feedback.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { incrementGood, incrementNeutral, incrementBad } = options;
  const { countTotalFeedback, countPositiveFeedbackPercentage } =
    onLeaveFeedback;
  const countTotalPositive = () => {
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };
  return (
    <List>
      <ItemBtn>
        <button
          onClick={() => {
            incrementGood();
            countTotalPositive();
          }}
        >
          Good
        </button>
      </ItemBtn>
      <ItemBtn>
        <button
          onClick={() => {
            incrementNeutral();
            countTotalPositive();
          }}
        >
          Neutral
        </button>
      </ItemBtn>
      <ItemBtn>
        <button
          onClick={() => {
            incrementBad();
            countTotalPositive();
          }}
        >
          Bad
        </button>
      </ItemBtn>
    </List>
  );
};
