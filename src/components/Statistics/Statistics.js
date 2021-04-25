import Notification from "./Notification";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total ? (
    <ul className={styles.list}>
      <li className={styles.item}>Good: {good}</li>
      <li className={styles.item}>Neutral: {neutral}</li>
      <li className={styles.item}>Bad: {bad}</li>
      <li className={styles.item}>Total: {total}</li>
      <li className={styles.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  ) : (
    <Notification message="No feedback given" />
  );

export default Statistics;
