// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Section } from './Feedback.styled';
import { StatisticsComponent } from './StatisticsComponent';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
class Feedback extends Component {
  static defaultProps = {
    total: 0,
    positive: 0,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    display: false,
  };

  incrementGood = () => {
    this.setState(state => {
      return { good: state.good + 1 };
    });
  };
  incrementNeutral = () => {
    this.setState(state => {
      return { neutral: state.neutral + 1 };
    });
  };
  incrementBad = () => {
    this.setState(state => {
      return { bad: state.bad + 1 };
    });
  };
  countTotalFeedback = () => {
    this.setState({ display: true });
    this.setState(state => {
      return { total: state.bad + state.neutral + state.good };
    });
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(state => {
      return { positive: Math.round(state.good / (state.total / 100)) };
    });
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          Please leave feedback
          <FeedbackOptions
            options={{
              incrementGood: this.incrementGood,
              incrementNeutral: this.incrementNeutral,
              incrementBad: this.incrementBad,
            }}
            onLeaveFeedback={{
              countTotalFeedback: this.countTotalFeedback,
              countPositiveFeedbackPercentage:
                this.countPositiveFeedbackPercentage,
            }}
          />
        </Section>
        <Section title="Statistics">
          Statistics
          <Notification
            message="There is no feedback"
            display={this.state.display}
          ></Notification>
          <StatisticsComponent
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positive}
            display={this.state.display}
          />
        </Section>
      </>
    );
  }
}
export default Feedback;
