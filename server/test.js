const assert = require('assert');
const request = require('supertest');
const api = require('./app');

const { app } = api;

describe('The Bored API tests', () => {
  it('returns one random activity', done => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(response => {
        assert.strictEqual(typeof response.body.activity, 'string');
        assert.strictEqual(typeof response.body.type, 'string');
        assert.strictEqual(typeof response.body.participants, 'number');
        assert.strictEqual(typeof response.body.price, 'number');
        assert.strictEqual(typeof response.body.link, 'string');
        assert.strictEqual(typeof response.body.key, 'string');
        assert.strictEqual(typeof response.body.accessibility, 'number');
      })
      .expect(200, done);
  });
  it('returns one random activity based on number of participants', done => {
    request(app)
      .get('/participants/3')
      .set('Accept', 'application/json')
      .expect(response => {
        assert.strictEqual(typeof response.body.activity, 'string');
        assert.strictEqual(typeof response.body.type, 'string');
        assert.strictEqual(response.body.participants, 3);
        assert.strictEqual(typeof response.body.price, 'number');
        assert.strictEqual(typeof response.body.link, 'string');
        assert.strictEqual(typeof response.body.key, 'string');
        assert.strictEqual(typeof response.body.accessibility, 'number');
      })
      .expect(200, done);
  });
});
