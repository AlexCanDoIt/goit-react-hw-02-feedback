import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionKeys = Object.keys(options);

  return (
    <div className={styles.container}>
      {optionKeys.map((key) => (
        <button
          className={styles.button}
          key={key}
          type="button"
          value={key}
          onClick={onLeaveFeedback}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
