import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AuthButton({ type, link }) {
  let label;
  switch (type) {
    case 'signin':
      label = 'Sign In';
      break;
    case 'signup':
      label = 'Sign Up';
      break;
    case 'signout':
      label = 'Sign Out';
      break;
    default:
      label = '';
  }

  return (
    <Link to={link}>
      <button>
        {label}
      </button>
    </Link>
  );
}

AuthButton.propTypes = {
  type: PropTypes.oneOf(['signin', 'signup', 'signout']).isRequired,
  link: PropTypes.string.isRequired,
};

export default AuthButton;