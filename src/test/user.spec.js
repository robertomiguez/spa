const request = require('supertest'),
  session = require('supertest-session'),
  app = require('../../server'),
  // async = require('async'),
  req = request(app),
  ses = session(app)

describe('API Tests', () => { 

  describe('POST /user', () => {
    let data = 
            {
              name: 'Mike',
              email: 'mike@gmail.com',
              mobile: '07770888055',
              password: '111111'
            }
    it('Respond status 200 with user created.', done => {
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
          name: 'Mi',
          email: 'mike@gmail.com',
          mobile: '07770888055',
          password: '111111'
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
          name: 'Mike',
          email: 'mike@com',
          mobile: '07770888055',
          password: '111111'
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
          name: 'Mike',
          email: 'mike@service.com',
          mobile: '0777',
          password: '111111'
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
          name: 'Mike',
          email: 'mike@service.com',
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

  describe('GET /user', () => {
    it('respond status 403 with user not logged ', (done) => {
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
          email: 'mike@gmail.com',
          password: '111111'
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
    it('respond status 200 with user logged ', (done) => {
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
          email: 'mike@com',
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
          email: 'mike@service.com',
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

})
