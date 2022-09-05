// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, List, ItemBtn, ItemStat, Rating } from './Feedback.styled';
class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      valueGood: 0,
      valueNeutral: 0,
      valueBad: 0,
    };
  }
  incrementGood = () => {
    this.setState(state => {
      return { valueGood: state.valueGood + 1 };
    });
  };
  incrementNeutral = () => {
    this.setState(state => {
      return { valueNeutral: state.valueNeutral + 1 };
    });
  };
  incrementBad = () => {
    this.setState(state => {
      return { valueBad: state.valueBad + 1 };
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
              }}
            >
              Good
            </button>
          </ItemBtn>
          <ItemBtn>
            <button
              onClick={() => {
                this.incrementNeutral();
              }}
            >
              Neutral
            </button>
          </ItemBtn>
          <ItemBtn>
            <button
              onClick={() => {
                this.incrementBad();
              }}
            >
              Bad
            </button>
          </ItemBtn>
        </List>
        <Text>Statistics</Text>
        <List>
          <ItemStat>
            <Rating>Good: {this.state.valueGood}</Rating>
          </ItemStat>
          <ItemStat>
            <Rating>Neutral: {this.state.valueNeutral}</Rating>
          </ItemStat>
          <ItemStat>
            <Rating>Bad: {this.state.valueBad}</Rating>
          </ItemStat>
        </List>
      </>
    );
  }
}
export default Feedback;
