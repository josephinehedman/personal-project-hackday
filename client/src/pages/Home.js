import Button from '../components/Button';
import './Home.css';

const Home = ({ getData }) => (
  <main className="main-content">
    <div className="main-container--home-page">
      <h1 className="header__welcome">Welcome to Tombola!</h1>
      <Button getData={getData} />
    </div>
  </main>
);

export default Home;
