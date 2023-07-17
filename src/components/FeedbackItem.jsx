import { FaTimes, FaEdit } from 'react-icons/fa';
import Proptypes from 'prop-types';
import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="#ff6a95" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="#ff6a95"></FaEdit>
      </button>
      <div className="text-dispaly">{item.text}</div>
    </Card>
  );
}

FeedbackItem.Proptypes = {
  props: Proptypes.object,
};

export default FeedbackItem;
