const // request = require('supertest'),
  session = require('supertest-session'),
  app = require('../server'),
  // req = request(app),
  ses = session(app),
  { randomNumber } = require('../src/config/utils'),
  partialName = randomNumber()
let idPrice

describe('Price API Tests', () => {
  describe('GET /treatment', () => {
    it('respond status 403 with user not logged ', done => {
      ses
        .get('/treatment')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403, done)
    })
  })

  describe('GET /price', () => {
    it('respond status 403 with user not logged ', done => {
      ses
        .get('/price')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403, done)
    })
  })

  describe('GET /price/expired', () => {
    it('respond status 403 with user not logged ', done => {
      ses
        .get('/price/expired')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403, done)
    })
  })

  describe('POST /price', () => {
    let data =
            {
              duration: 1,
              value: 40,
              idTreatment: '5ca730702ad11c5860ceff61'
            }
    it('Respond status 403 with user not logged ', done => {
      ses
        .post('/price')
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

  describe('POST /user', () => {
    let data =
            {
              name: `user${partialName}`,
              email: `user${partialName}@mymail.com`,
              mobile: '07770777123',
              password: 'pwd000'
            }
    it('Respond status 201 with user created.', done => {
      ses
        .post('/user')
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

  describe('POST /login', () => {
    let data =
        {
          email: `user${partialName}@mymail.com`,
          password: 'pwd000'
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

  describe('GET /treatment', () => {
    it('respond status 200 with a list of treatments  ', done => {
      ses
        .get('/treatment')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('GET /price', () => {
    it('respond status 200 with a list of prices ', done => {
      ses
        .get('/price')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('GET /price/expired', () => {
    it('respond status 200 with a list of expired prices ', done => {
      ses
        .get('/price/expired')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('POST /price', () => {
    let data =
            {
              duration: '1',
              value: '50',
              idTreatment: '5ca730702ad11c5860ceff61'
            }
    it('Respond status 403 with administrator not logged ', done => {
      ses
        .post('/price')
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

  describe('PUT /price/:idPrice', () => {
    let data =
            {
              duration: '1',
              value: '50',
              idTreatment: '5ca730702ad11c5860ceff61'
            }
    it('Respond status 403 with administrator not logged.', done => {
      ses
        .put(`/price/${idPrice}`)
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

  describe('DELETE /price/:idPrice', () => {
    it('Respond status 403 with administrator not logged.', done => {
      ses
        .delete(`/price/${idPrice}`)
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
          email: 'admin@admin.com',
          password: 'admin0'
        }
    it('Respond status 200 with administrator login OK', done => {
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

  describe('POST /price', () => {
    let data =
            {
              duration: 3,
              value: 40,
              idTreatment: '5ca730702ad11c5860ceff61'
            }
    it('Respond status 406 with duration invalid ', done => {
      ses
        .post('/price')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(406)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })

  describe('POST /price', () => {
    let data =
            {
              duration: 1,
              value: -1,
              idTreatment: '5ca730702ad11c5860ceff61'
            }
    it('Respond status 406 with value invalid ', done => {
      ses
        .post('/price')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(406)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })

  describe('POST /price', () => {
    let data =
            {
              duration: 1,
              value: 50,
              idTreatment: ''
            }
    it('Respond status 406 with treatment invalid ', done => {
      ses
        .post('/price')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(406)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })

  describe('POST /price', () => {
    let data =
            {
              duration: '1',
              value: '50',
              idTreatment: '5ca730702ad11c5860ceff61'
            }
    it('Respond status 201 with price created ', done => {
      ses
        .post('/price')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err)
          idPrice = JSON.parse(res.text)._id
          done()
        })
    })
  })

  describe('PUT /price/:idPrice', () => {
    let data =
        {
          duration: '1',
          value: '50',
          idTreatment: '5ca730702ad11c5860ceff61'
        }
    it('Respond status 201 with price updated.', done => {
      ses
        .put(`/price/${idPrice}`)
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

  describe('DELETE /price/:idPrice', () => {
    it('respond status 204 logical address delete', done => {
      ses
        .delete(`/price/${idPrice}`)
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
