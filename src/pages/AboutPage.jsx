import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';
function AboutPage() {
  return (
    <Card reverse="true">
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a react app to leave feedback for products and services</p>
        <p>Version 1.0.0</p>
        <p>
          <Link to={'/'}>Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
