import { Link } from 'react-router-dom';
import '../styles/Error.css';

const Error = () => {
  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">Page Not Found</h2>
      <p className="error-description">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link to="/" className="error-home-btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;