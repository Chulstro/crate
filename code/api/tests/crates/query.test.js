const request = require('supertest');
const express = require('express');
import graphqlHTTP from 'express-graphql';
import schema from '../../src/setup/schema';

const app = express();

describe ('crates queries', () => {
  beforeAll(() =>{
    app.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });

  it("returns all crates", async () => {
    const response = await request(app)
      .get('/')
      .send({ query: '{crates(orderBy: "ASC") { name }}'})
      .expect(200)

    expect(response.body.data.crates.length).toEqual(12)
    expect(response.body.data.crates[0].name).toEqual('Clothes for Men')
  })

  it("returns all crates", async () => {
    const response = await request(app)
      .get('/')
      .send({ query: '{crateById(crateId: 1) { name }}'})
      .expect(200)

    expect(response.body.data.crateById.name).toEqual('Clothes for Men')
  })
})
