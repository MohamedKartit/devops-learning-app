const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with Hello, DevOps!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, DevOps!' });
  });
});