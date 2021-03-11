const express = require('express');
const fetchActivity = require('./fetchActivity');

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  fetchActivity('').then(data => res.json(data));
});

app.get('/participants/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const path = `?participants=${req.params.id}`;
  fetchActivity(path).then(data => res.json(data));
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports.app = app;
