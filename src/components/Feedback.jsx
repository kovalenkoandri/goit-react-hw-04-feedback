// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, List, ItemBtn, ItemStat, Rating } from './Feedback.styled';
class Feedback extends Component {
  static defaultProps = {
    total: 0,
    positive: 0,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
        <Text>Please leave feedback</Text>
        <List>
          <ItemBtn>
            <button
              onClick={() => {
                this.incrementGood();
                this.countTotalFeedback();
                this.countPositiveFeedbackPercentage();
              }}
            >
              Good
            </button>
          </ItemBtn>
          <ItemBtn>
            <button
              onClick={() => {
                this.incrementNeutral();
                this.countTotalFeedback();
                this.countPositiveFeedbackPercentage();
              }}
            >
              Neutral
            </button>
          </ItemBtn>
          <ItemBtn>
            <button
              onClick={() => {
                this.incrementBad();
                this.countTotalFeedback();
                this.countPositiveFeedbackPercentage();
              }}
            >
              Bad
            </button>
          </ItemBtn>
        </List>
        <Text>Statistics</Text>
        <List>
          <ItemStat>
            <Rating>Good: {this.state.good}</Rating>
          </ItemStat>
          <ItemStat>
            <Rating>Neutral: {this.state.neutral}</Rating>
          </ItemStat>
          <ItemStat>
            <Rating>Bad: {this.state.bad}</Rating>
          </ItemStat>
          <ItemStat>
            <Rating>Total: {this.state.total}</Rating>
          </ItemStat>
          <ItemStat>
            <Rating>Positive: {this.state.positive}%</Rating>
          </ItemStat>
        </List>
      </>
    );
  }
}
export default Feedback;
