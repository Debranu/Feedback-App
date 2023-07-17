import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  //Calculate average rating:
  let avgRating = (
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(avgRating) ? 'N/A' : avgRating}</h4>
    </div>
  );
}

export default FeedbackStats;
