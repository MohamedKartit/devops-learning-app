// const request = require('supertest');
// const app = require('./app');

// describe('GET /', () => {
//   it('responds with HTML containing DevOps Learning App', async () => {
//     const response = await request(app).get('/');
//     expect(response.statusCode).toBe(200);
//     expect(response.text).toContain('DevOps Learning App');
//     expect(response.headers['content-type']).toMatch(/html/);
//   });
// });

const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with HTML containing DevOps Learning App', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('DevOps Learning App');
    expect(response.headers['content-type']).toMatch(/html/);
  });

  it('responds with 404 for non-existent routes', async () => {
    const response = await request(app).get('/non-existent-route');
    expect(response.statusCode).toBe(404);
  });
});

