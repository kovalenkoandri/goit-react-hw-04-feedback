import { List, ItemBtn } from './Feedback.styled';
export const FeedbackOptions = ({
  incrementGood,
  incrementNeutral,
  incrementBad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (

  <List>
    <ItemBtn>
      <button
        onClick={() => {
          incrementGood();
          countTotalFeedback();
          countPositiveFeedbackPercentage();
        }}
      >
        Good
      </button>
    </ItemBtn>
    <ItemBtn>
      <button
        onClick={() => {
          incrementNeutral();
          countTotalFeedback();
          countPositiveFeedbackPercentage();
        }}
      >
        Neutral
      </button>
    </ItemBtn>
    <ItemBtn>
      <button
        onClick={() => {
          incrementBad();
          countTotalFeedback();
          countPositiveFeedbackPercentage();
        }}
      >
        Bad
      </button>
    </ItemBtn>
  </List>
);
