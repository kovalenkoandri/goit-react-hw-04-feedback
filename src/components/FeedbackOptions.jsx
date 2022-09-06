import { List, ItemBtn } from './Feedback.styled';
    
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const { incrementGood, incrementNeutral, incrementBad } = options;
    const { countTotalFeedback, countPositiveFeedbackPercentage } =
      onLeaveFeedback;
    return (
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
    )
};
