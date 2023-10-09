import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { SectionWrapper } from './SectionWrapper/SectionWrapper';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    feedbackOptions: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
    total: 0,
    positivePercentage: 0,
  };

  updaterFeedbackStats = key => {
    this.setState(prevState => ({
      feedbackOptions: {
        ...prevState.feedbackOptions,
        [key]: prevState.feedbackOptions[key] + 1,
      },
      total: prevState.total + 1,
      positivePercentage: Math.round(
        key === 'good'
          ? ((prevState.feedbackOptions.good + 1) * 100) / (prevState.total + 1)
          : (prevState.feedbackOptions.good * 100) / (prevState.total + 1)
      ),
    }));
  };

  render() {
    const { good, neutral, bad } = this.state.feedbackOptions;
    const { total, positivePercentage } = this.state;

    return (
      <div>
        <SectionWrapper title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state.feedbackOptions}
            onLeaveFeedback={this.updaterFeedbackStats}
          />
        </SectionWrapper>

        <SectionWrapper title={'Statistics'}>
          {this.state.total === 0 ?
          <Notification messageme={'There is no feedback'} /> :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />}
        </SectionWrapper>
      </div>
    );
  }
}
