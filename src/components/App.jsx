import { GlobalStyle } from "./base/GlobalStyle";
import { Box } from "./box/box";
import Statistics from "./Statistics/Statistics";
import Section from "./SectionTitle/SectionTitle";
import Notification from "./Notification/Notification";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import { useState } from "react";

export const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const onLeaveGoodFeedback = () => {
		setGood(good + 1);
	};
	const onLeaveNeutralFeedback = () => {
		setNeutral(neutral + 1);
	};
	const onLeaveBadFeedback = () => {
		setBad(bad + 1);
	};

	function countTotalFeedback() {
		return good + neutral + bad;
	}

	function countPositiveFeedbackPercentage() {
		return Math.round((good / countTotalFeedback()) * 100) || 0;
	}
	return (
		<Box maxWidth="400px" m="0 auto" p={5}>
			<GlobalStyle />
			<Section title="Please leave feedback">
				<FeedbackOptions
					onLeaveGoodFeedback={onLeaveGoodFeedback}
					onLeaveNeutralFeedback={onLeaveNeutralFeedback}
					onLeaveBadFeedback={onLeaveBadFeedback}
				/>
			</Section>
			<Section title="Statistics">
				{countTotalFeedback() ? (
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						totalFeedback={countTotalFeedback()}
						positivePercentage={countPositiveFeedbackPercentage()}
					/>
				) : (
					<Notification message="No feedback given" />
				)}
			</Section>
		</Box>
	);
};

// export class AppOld extends Component {
// 	state = {
// 		good: 0,
// 		neutral: 0,
// 		bad: 0,
// 	};

// 	onLeaveFeedback = option => {
// 		this.setState(state => ({
// 			[option]: state[option] + 1,
// 		}));
// 	};

// 	countTotalFeedback() {
// 		return Object.values(this.state).reduce((acc, value) => acc + value, 0);
// 	}

// 	countPositiveFeedbackPercentage = () => {
// 		const { good } = this.state;
// 		return Math.round((good / this.countTotalFeedback()) * 100) || 0;
// 	};

// 	render() {
// 		const { good, neutral, bad } = this.state;
// 		return (
// 			<Box maxWidth="400px" m="0 auto" p={5}>
// 				<GlobalStyle />
// 				<Section title="Please leave feedback">
// 					<FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
// 				</Section>
// 				<Section title="Statistics">
// 					{this.countTotalFeedback() ? (
// 						<Statistics
// 							good={good}
// 							neutral={neutral}
// 							bad={bad}
// 							totalFeedback={this.countTotalFeedback()}
// 							positivePercentage={this.countPositiveFeedbackPercentage()}
// 						/>
// 					) : (
// 						<Notification message="No feedback given" />
// 					)}
// 				</Section>
// 			</Box>
// 		);
// 	}
// }
