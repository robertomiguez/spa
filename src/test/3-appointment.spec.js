const // request = require('supertest'),
  session = require('supertest-session'),
  app = require('../../server'),
  // req = request(app),
  ses = session(app)
let idAppointment

describe('Appointment API Tests', () => {
  describe('POST /appointment', () => {
    let data =
                {
                  datetime: '2019-04-11T13:00+01:00',
                  discount: 5,
                  idPrice: '5cae1163bd3087277d532f5b',
                  idAddress: '5cae1198d8a2fb2e5f566f32'
                }
    it('Respond status 403 with user not logged ', done => {
      ses
        .post('/appointment')
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

  describe('PUT /appointment/5cae41e2d838bb1d2f3adcd6', () => {
    let data =
                {
                  datetime: '2019-04-11T13:00+01:00',
                  discount: 20,
                  idPrice: '5cae1163bd3087277d532f5b',
                  idAddress: '5cae1198d8a2fb2e5f566f32'
                }
    it('Respond status 403 with user not logged.', done => {
      ses
        .put('/appointment/5cae41e2d838bb1d2f3adcd6')
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

  describe('DELETE /appointment/5cae4b541ea5385881fda38c', () => {
    it('Respond status 403 with user not logged.', done => {
      ses
        .delete('/appointment/5cae4b541ea5385881fda38c')
        .set('Accept', 'application/json')
        .expect(403)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })

  describe('GET /appointment', () => {
    it('respond status 403 with user not logged ', done => {
      ses
        .get('/appointment')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403, done)
    })
  })

  describe('POST /login', () => {
    let data =
        {
          email: 'monica@gmail.com',
          password: 'monica'
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

  describe('GET /appointment', () => {
    it('respond status 404 with an appointment not found ', done => {
      ses
        .get('/appointment')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })
  })

  describe('POST /appointment', () => {
    let data =
                {
                  datetime: '2019-14-44T33:00+01:00',
                  discount: 5,
                  idPrice: '5cae1163bd3087277d532f5b',
                  idAddress: '5cae1198d8a2fb2e5f566f32'
                }
    it('Respond status 406 with datetime not acceptable', done => {
      ses
        .post('/appointment')
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

  describe('POST /appointment', () => {
    let data =
                {
                  datetime: '2019-04-11T13:00+01:00',
                  discount: -5,
                  idPrice: '5cae1163bd3087277d532f5b',
                  idAddress: '5cae1198d8a2fb2e5f566f32'
                }
    it('Respond status 406 with discount not acceptable', done => {
      ses
        .post('/appointment')
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

  describe('POST /appointment', () => {
    let data =
                {
                  datetime: '2019-04-11T13:00+01:00',
                  discount: 5,
                  idPrice: 'xxxxxxxxxxxxxxxxxxxxxxxx',
                  idAddress: '5cae1198d8a2fb2e5f566f32'
                }
    it('Respond status 406 with idPrice not acceptable', done => {
      ses
        .post('/appointment')
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

  describe('POST /appointment', () => {
    let data =
                {
                  datetime: '2019-04-11T13:00+01:00',
                  discount: 5,
                  idPrice: '5cae1163bd3087277d532f5b',
                  idAddress: 'xxxxxxxxxxxxxxxxxxxxxxxx'
                }
    it('Respond status 406 with idPrice not acceptable', done => {
      ses
        .post('/appointment')
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

  describe('POST /appointment', () => {
    let data =
                {
                  datetime: '2019-04-11T13:00+01:00',
                  discount: 5,
                  idPrice: '5cae1163bd3087277d532f5b',
                  idAddress: '5cae1198d8a2fb2e5f566f32'
                }
    it('Respond status 201 with appointment created ', done => {
      ses
        .post('/appointment')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err)
          idAppointment = JSON.parse(res.text)._id
          done()
        })
    })
  })

  describe('GET /appointment', () => {
    it('respond status 200 with appointments of user session ', done => {
      ses
        .get('/appointment')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe(`PUT /appointment/:idAppointment`, () => {
    let data =
                {
                  datetime: '2019-04-11T13:00+01:00',
                  discount: 20,
                  idPrice: '5cae1163bd3087277d532f5b',
                  idAddress: '5cae1198d8a2fb2e5f566f32'
                }
    it('Respond status 201 with appointment updated.', done => {
      ses
        .put(`/appointment/${idAppointment}`)
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

  describe(`DELETE /appointment/:idAppointment}`, () => {
    it('respond status 204 appointment deleted', done => {
      ses
        .delete(`/appointment/${idAppointment}`)
        .set('Accept', 'application/json')
        .expect(204)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })
})
