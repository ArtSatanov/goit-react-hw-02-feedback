import { Component } from 'react';
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  render() {
    return (<div>
      <FeedbackOptions btnsNames={this.state} />
      
    </div>
    );
  }
}
