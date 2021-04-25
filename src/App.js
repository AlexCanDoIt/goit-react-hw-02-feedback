import { Component } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (e) => {
    const feedbackValue = e.target.value;

    this.setState((prevState) => ({
      [feedbackValue]: prevState[feedbackValue] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const positivePercentage = Math.round(
      (good / this.countTotalFeedback()) * 100
    );
    return positivePercentage ? positivePercentage : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
