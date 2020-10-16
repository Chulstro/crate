const request = require('supertest');
const express = require('express');
import graphqlHTTP from 'express-graphql';
import schema from '../../src/setup/schema';

const app = express();

describe ('products queries', () => {
  beforeAll(() =>{
    app.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });

  it("returns all products", async () => {
    const response = await request(app)
      .get('/')
      .send({ query: '{products { name }}'})
      .expect(200)

    expect(response.body.data.products.length).toEqual(36)
    expect(response.body.data.products[0].name).toEqual('T-Shirt for Men - Grey')
  })

  it("return one product", async () => {
    const response = await request(app)
      .get('/')
      .send({ query: '{ productById(productId: 1) { name }}'})
      .expect(200)

    expect(response.body.data.productById.name).toEqual('Belt for Women')
  })

  it("return one product", async () => {
    const response = await request(app)
      .get('/')
      .send({ query: '{ product(slug: "belt-for-women") { name }}'})
      .expect(200)
     console.log(response.body.data)
    expect(response.body.data.product.name).toEqual('Belt for Women')
  })
})
