const request = require('supertest');
const express = require('express');
import graphqlHTTP from 'express-graphql';
import schema from '../../src/setup/schema';

const app = express();

describe ('surveyProducts queries', () => {
  beforeAll(() =>{
    app.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });

  it("returns all surveyProducts", async () => {
    const response = await request(app)
      .get('/')
      .send({ query: '{surveyProducts { image styleId }}'})
      .expect(200)

    expect(response.body.data.surveyProducts.length).toEqual(36)
    expect(response.body.data.surveyProducts[0].styleId).toEqual(1)
  })
})
