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
  })

  it("is true", () => {
    expect(true).toBe(true)
  })
})
