import Button from '../components/Button';
import './Home.css';

const Home = ({ getData }) => (
  <main className="main-content">
    <section className="main-container--home-page">
      <h1 className="header__welcome">Welcome to Tombola!</h1>
      <Button getData={getData} />
    </section>
  </main>
);

export default Home;
