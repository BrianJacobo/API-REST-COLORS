const request = require('supertest');
const app = require('../index');

// Testing get all colors
describe('GET /colors', () => {
  it('respond with json containing a list of all colors', done => {
    request(app)
    .get('/colors')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done)
  });
});

// Testing all colors by ID
describe('GET /colors/:id', () => {
  it('respond with json containing a list of all colors by ID', done => {
    request(app)
    .get('/colors/1')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done)
  });
});

describe('POST /colors', () => {
  it('respond with 201 created', done => {
    const data = {
      name: "black",
      color: "#000000"
    }
    request(app)
    .post('/colors')
    .send(data)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(201)
    .end(err => {
      if(err) return done(err)
      done();
    })
  })
})

describe('UPDATE /colors', () => {
  it('respond with 200 UPDATED', done => {
    const data = {
      name: "black",
    }

    request(app)
    .put('/colors/2')
    .send(data)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(err => {
      if(err) return done(err)
      done();
    })
  })
})

describe('DELETE /colors', () => {
  it('respond with 200 DELETED', done => {

    request(app)
    .put('/colors/2')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(err => {
      if(err) return done(err)
      done();
    })
  })
})

