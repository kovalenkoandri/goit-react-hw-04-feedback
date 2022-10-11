import { useState } from 'react';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { TitleStatistics } from './TitleStatistics';

export default function Feedback() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
 

  const stateKeys = Object.keys(state);

  const increment = key =>
    setState(prevState => ({...prevState, [key]: prevState[key] + 1 }));

  const countTotalFeedback = () => state.bad + state.neutral + state.good;

  const countPositiveFeedbackPercentage = () =>
    Math.round(state.good / (countTotalFeedback() / 100));

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions stateKeys={stateKeys} increment={increment} />
        <TitleStatistics>Statistics</TitleStatistics>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
