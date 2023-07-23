import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  function textChangeHandler(e) {
    console.log(e);
    setText(e.target.value);

    if (e.target.value === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (e.target.value !== '' && e.target.value.length < 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters!');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  }

  function submitHandler(e) {
    e.preventDefault();

    const newFeedback = {
      rating,
      text,
    };
    console.log(newFeedback);
    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      if (rating) addFeedback(newFeedback);
    }

    setText('');
  }

  return (
    <Card reverse={false}>
      <form onSubmit={submitHandler}>
        <h2> How would you rate your experience with us?</h2>
        <RatingSelect onSelect={(rating) => setRating(rating)} />

        {rating ? (
          <div className="input-group">
            <input
              onChange={textChangeHandler}
              type="text"
              placeholder="Write a review"
              value={text}
            />
            <Button type="submit" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
        ) : (
          <></>
        )}

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
FeedbackForm.defaultProps = {
  reverse: false,
};

export default FeedbackForm;
