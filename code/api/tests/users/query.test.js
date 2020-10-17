const request = require('supertest');
const express = require('express');
import graphqlHTTP from 'express-graphql';
import schema from '../../src/setup/schema';

const app = express();

describe("user queries", () =>{
  beforeAll(() =>{
    app.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });

  it("returns all users", async () => {
    const response = await request(app)
      .get('/')
      .send({ query: '{users { name email }}'})
      .expect(200)

    expect(response.body.data.users.length).toEqual(2)
    expect(response.body.data.users[0].name).toEqual("The Admin")
  })

  it("returns one user", async () => {
    const response = await request(app)
      .get('/')
      .send({ query: '{user(id: 1) { name email }}'})
      .expect(200)

    expect(response.body.data.user.name).toEqual("The Admin")
  })

  it("logs in a user", async () => {
    const query = "{ userLogin(email: 'admin@crate.com', password: '123456') { user { name role } } }"

    const response = await request(app)
      .get('/')
      .send({ query: '{ userLogin(email: "admin@crate.com", password: "123456") { user { name role } } }'})
      .expect(200)

    expect(response.body.data.userLogin.user.name).toEqual("The Admin")
  })

  it("gets user userGenders", async () => {
    const response = await request(app)
      .get('/')
      .send({ query: '{ userGenders { name } }'})
      .expect(200)

    console.log(response.body.data)
    expect(response.body.data.userGenders[0].name).toEqual("Male")
    expect(response.body.data.userGenders.length).toEqual(2)
  })

  it("is true", () => {
    expect(true).toBe(true)
  })
})
