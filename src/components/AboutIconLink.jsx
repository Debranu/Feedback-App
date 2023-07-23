import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion
          size={30}
          style={{
            position: 'fixed',
            right: '40px',
            bottom: '40px',
          }}
        />
      </Link>
    </div>
  );
}

export default AboutIconLink;
