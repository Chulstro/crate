// const request = require('supertest');
// const express = require('express');
// import graphqlHTTP from 'express-graphql';
// import schema from '../../src/setup/schema';
//
// const app = express();
//
// describe("user mutations", () =>{
//   beforeAll(() =>{
//     app.use(
//       '/',
//       graphqlHTTP({
//         schema: schema,
//         graphiql: false
//       })
//     );
//   });
//
//   // it("creates one user", async () => {
//   //   const response = await request(app)
//   //     .post('/')
//   //     .send({ query: 'mutation { userSignup(name: "Johnny", email: "example@email.com", password: "password") { name email } }'})
//   //     .expect(200)
//   //
//   //   console.log(response.body.data)
//   //   expect(response.body.data.userSignup.name).toEqual("Johnny")
//   // })
//
//   // it("removes one user", async () => {
//   //   const response = await request(app)
//   //     .post('/')
//   //     .send({ query: 'mutation { userRemove(id: 4) { name email } }'})
//   //     .expect(200)
//   // })
// })
