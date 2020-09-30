const expect = require('chai').expect;
const request = require('supertest');

const app = require('./app');

describe('GET REQUESTS', () => {

	it('/hello string return', (done) => {

		request(app).get('/hello')
		.then((res) => {
			expect(res.status).to.equal(200);
			expect(res.text).to.equal('Hello, World!');
			done();
		})
		.catch((err) => done(err));
	});

	it('/url-example json return', (done) => {

		request(app).get('/url-example')
		.then((res) => {
			expect(res.status).to.equal(200);
			expect(res.body.message).to.equal("response from route");
			done();
		})
		.catch((err) => done(err))
	})
})