import './About.css';

const About = () => (
  <main className="main-content">
    <section className="main-container--about-page">
      <h1 className="header__about">About Tombola</h1>
      <p className="header__paragraph">An inspiration page to find fun activites</p>
      <div className="info-box">
        <table className="info-table">
          <tr>
            <th className="th--bold">
              What?
            </th>
            <th className="th--bold">
              Description
            </th>
          </tr>
          <tr>
            <td>
              Possibility
            </td>
            <td>An percentage describing how possible an event is to do with
        100% being the most accessible</td>
          </tr>
          <tr>
            <td>
              Price
            </td>
            <td>A factor describing the cost of the event ranging from free to $$$</td>
          </tr>
          <tr>
            <td>
            Participants
            </td>
            <td>The number of people that this activity could involve</td>
          </tr>
        </table>
      </div>
    </section>
  </main>
);

export default About;