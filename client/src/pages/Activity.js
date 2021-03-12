import React, { useState } from 'react';
import Button from '../components/Button';
import './Activity.css';

const Activity = ({ activity, getData }) => {
  const [participants, setParticipants] = useState('random');
  const returnPercentageAccessibility = accessibility => Math.round((1 - accessibility) * 100);
  const accessibility = returnPercentageAccessibility(activity.accessibility);

  return (
    <main className="main-content--activity-page">
      <h1 className="header__activity">Activity Generator</h1>
        {activity.error ? <div className="error-card"> <h1>Sorry, Couldn't get your activity. Please try again</h1></div>
          : <section className="activity-card">
            <article className="activity-card__header">
            <h2 className="activity-card__heading">{activity.activity}</h2>
                <p className="card__info__type">
                  Type: {activity.type}
                </p>
            </article>
              <article className="activity-card__info">
                 <div className="card__info">
                   <p className="card__info--circle">
                    {accessibility}%
                   </p>
                   <p className="card__info__text"> Possibility to do</p>
                 </div>
              <div className="card__info">
                {activity.price === 0 && <p className="card__info--circle">
                Free</p> }
               {activity.price > 0 && activity.price <= 0.33 && <p className="card__info--circle">
                $</p> }
                {activity.price >= 0.34 && activity.price <= 0.66 && <p className="card__info--circle">
                $</p> }
                {activity.price >= 0.64 && <p className="card__info--circle">
                $$$</p> }
               <p className="card__info__text"> Price range (free-$$$)</p>
              </div>
              <div className="card__info">
                <p className="card__info--circle">
                  {activity.participants}
                </p>
                <p className="card__info__text"> Participants</p>
              </div>
            </article>
          </section>}
      <section className="input-container">
      <form className="form">
          <label className="label__participants" htmlFor="no_participants">Number of participants </label>
          <select className="no_participants" name="no_participants" value={participants} onChange={e => setParticipants(e.target.value)}>
            <option value="random">Random</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </form>
      <Button getData={getData} participants={participants} />
      </section>
    </main>
  );
};

export default Activity;
