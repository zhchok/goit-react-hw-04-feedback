import { Box } from "components/box/box";
import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";

function FeedbackOptions({ onLeaveGoodFeedback, onLeaveNeutralFeedback, onLeaveBadFeedback }) {
	return (
		<Box mb="32px">
			<Button type="button" onClick={() => onLeaveGoodFeedback()}>
				good
			</Button>
			<Button type="button" onClick={() => onLeaveNeutralFeedback()}>
				neutral
			</Button>
			<Button type="button" onClick={() => onLeaveBadFeedback()}>
				bad
			</Button>
		</Box>
	);
}

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string.isRequired),
	onLeaveGoodFeedback: PropTypes.func.isRequired,
	onLeaveNeutralFeedback: PropTypes.func.isRequired,
	onLeaveBadFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
