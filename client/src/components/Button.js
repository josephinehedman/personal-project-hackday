import { useHistory } from 'react-router-dom';
import './Button.css';

const Button = ({ getData, participants }) => {
  const history = useHistory();

  return (
    <button className="btn btn-get-activity"onClick={() => {
      history.push('/activity');
      getData(participants || 'random');
    }}>
      Get Activity
    </button>
  );
};

export default Button;
