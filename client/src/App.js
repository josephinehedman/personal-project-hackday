import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './pages/About';
import Activity from './pages/Activity';
import Home from './pages/Home';

function App() {
  const [activity, setActivity] = useState('');
  const path = 'http://localhost:3001';

  const getData = participants => {
    if (participants === 'random') {
      fetch(path)
        .then(res => res.json())
        .then(data => setActivity(data))
        .catch(error => console.log(error));
    } else {
      fetch(`${path}/participants/${participants}`)
        .then(res => res.json())
        .then(data => setActivity(data))
        .catch(error => console.log(error));
    }
  };

  useEffect(() => {
    getData('random');
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home getData={getData} />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/activity" exact>
            <Activity activity={activity} getData={getData} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
