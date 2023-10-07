import { Component } from 'react';
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions"
import { SectionWrapper } from './SectionWrapper/SectionWrapper';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    feedbackOptions: {
      good: 0,
      neutral: 0,
      bad: 0
    },
    total: 0,
    positivePercentage: 0,
  };

  render() {

    const { good, neutral, bad } = this.state.feedbackOptions;
    const { total, positivePercentage} = this.state;
    
    return (
      <div>
      <SectionWrapper title={"Please leave feedback"}>
      <FeedbackOptions options={this.state.feedbackOptions} />
      </SectionWrapper>

      <SectionWrapper title={"Statistics"}>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
      </SectionWrapper>
      </div>


    
    );
  }
}
