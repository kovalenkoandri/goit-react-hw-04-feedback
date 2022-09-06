// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Text,
  List,
  ItemBtn,
  
} from './Feedback.styled';
import { StatisticsComponent } from './StatisticsComponent';
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
        {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
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
        <StatisticsComponent
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positive}
        />
          
      </>
    );
  }
}
export default Feedback;
