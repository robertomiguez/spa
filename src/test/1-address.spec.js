const // request = require('supertest'),
  session = require('supertest-session'),
  app = require('../../server'),
  // req = request(app),
  ses = session(app)

describe('Address API Tests', () => {
  describe('GET /postcode', () => {
    it('respond status 403 with user not logged ', done => {
      ses
        .get('/postcode')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403, done)
    })
  })

  describe('GET /address', () => {
    it('respond status 403 with user not logged ', done => {
      ses
        .get('/address')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403, done)
    })
  })

  describe('POST /address', () => {
    let data =
            {
              number: '333',
              idPostcode: '5caa80252ad11c5860cf4b13',
              expired: null
            }
    it('Respond status 403 with user not logged ', done => {
      ses
        .post('/address')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })

  describe('PUT /address', () => {
    let data =
            {
              number: '333',
              idPostcode: '5caa80252ad11c5860cf4b13'
            }
    it('Respond status 403 with user not logged.', done => {
      ses
        .put('/address')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })

  describe(`DELETE /address}`, () => {
    it('respond status 403 with user not logged ', done => {
      ses
        .delete(`/address`)
        .set('Accept', 'application/json')
        .expect(403)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })

  describe('POST /login', () => {
    let data =
        {
          email: 'monica@gmail.com',
          password: '222222'
        }
    it('Respond status 200 with login OK', done => {
      ses
        .post('/login')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })

  describe('GET /postcode', () => {
    it('respond status 200 with a list of postcodes ', done => {
      ses
        .get('/postcode')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('GET /address', () => {
    it('respond status 404 with an address not found ', done => {
      ses
        .get('/address')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })
  })

  describe('POST /address', () => {
    let data =
            {
              number: '7800',
              idPostcode: '5caa80252ad11c5860cf4b13'
            }
    it('Respond status 201 with address created.', done => {
      ses
        .post('/address')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })

  describe('GET /address', () => {
    it('respond status 200 with an address of user session ', done => {
      ses
        .get('/address')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('PUT /address', () => {
    let data =
            {
              number: '9000',
              idPostcode: '5caa80252ad11c5860cf4b13'
            }
    it('Respond status 201 with address updated.', done => {
      ses
        .put('/address')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })

  describe(`DELETE /address}`, () => {
    it('respond status 204 logical address delete', done => {
      ses
        .delete(`/address`)
        .set('Accept', 'application/json')
        .expect(204)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })

  describe('GET /logout', () => {
    it('respond status 200 with user logged out ', done => {
      ses
        .get('/logout')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })
})
