const request = require('supertest'),
  session = require('supertest-session'),
  app = require('../server'),
  req = request(app),
  ses = session(app),
  { randomNumber } = require('../src/config/utils'),
  partialName = randomNumber()

describe('User API Tests', () => {
  describe('POST /user', () => {
    let data = {}
    it('Respond status 406 with an error expecting parameters', done => {
      req
        .post('/user')
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

  describe('POST /user', () => {
    let data =
        {
          name: 'Us',
          email: 'us@mymail.com',
          mobile: '07770777055',
          password: 'user000'
        }
    it('Respond status 406 with an invalid name', done => {
      req
        .post('/user')
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

  describe('POST /user', () => {
    let data =
        {
          name: 'User',
          email: 'user@com',
          mobile: '07770888055',
          password: 'user000'
        }
    it('Respond status 406 with an invalid email', done => {
      req
        .post('/user')
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

  describe('POST /user', () => {
    let data =
        {
          name: 'User',
          email: 'user@mymail.com',
          mobile: '0777',
          password: 'user000'
        }
    it('Respond status 406 with an invalid mobile', done => {
      req
        .post('/user')
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

  describe('POST /user', () => {
    let data =
        {
          name: 'User',
          email: 'user@myemail.com',
          mobile: '07770788055',
          password: '11111'
        }
    it('Respond status 406 with an invalid password', done => {
      req
        .post('/user')
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

  describe('POST /user', () => {
    let data =
            {
              name: `user${partialName}`,
              email: `user${partialName}@mymail.com`,
              mobile: '07770777123',
              password: 'pwd000'
            }
    it('Respond status 201 with user created.', done => {
      req
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

  describe('POST /user', () => {
    let data =
            {
              name: `user${partialName}`,
              email: `user${partialName}@mymail.com`,
              mobile: '07770777123',
              password: 'pwd000'
            }
    it('Respond status 406 with user unique key error.', done => {
      req
        .post('/user')
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

  describe('GET /user', () => {
    it('respond status 403 with user not logged ', done => {
      ses
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403, done)
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

  describe('GET /user', () => {
    it('respond status 200 with user logged ', done => {
      ses
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('POST /login', () => {
    let data = {}
    it('Respond status 406 with an error expecting parameters', done => {
      req
        .post('/login')
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

  describe('POST /login', () => {
    let data =
        {
          email: 'userX@myemail.com',
          password: '111111333'
        }
    it('Respond status 403 with an error user or password invalid.', done => {
      req
        .post('/login')
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

  describe('POST /login', () => {
    let data =
        {
          email: 'user@com',
          password: '111111'
        }
    it('Respond status 406 with an invalid email', done => {
      req
        .post('/login')
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

  describe('POST /login', () => {
    let data =
        {
          email: 'user@myemail.com',
          password: '11111'
        }
    it('Respond status 406 with an invalid password', done => {
      req
        .post('/login')
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
