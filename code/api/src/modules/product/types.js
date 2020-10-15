// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import { StyleType } from '../style/types'

// Product type
const ProductType = new GraphQLObjectType({
  name: 'product',
  description: 'Product Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    type: { type: GraphQLInt },
    gender: { type: GraphQLInt },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// User Gender type
const ProductTypesType = new GraphQLObjectType({
  name: 'productTypesType',
  description: 'User Types Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})


// const ProductSurveyType = new GraphQLObjectType({
// name: "ProductSurveyType",
// fields: {
//     styles: {
//       type: StyleType,
//       args: {
//         name: { type: GraphQLString }
//       },
//       resolve(parent, args) {
//         if (args.id) {
//           console.log(cars.find(car => car.id == args.id));
//           return cars.find(car => car.id == args.id);
//         }
//         console.log(products);
//         return cars;
//       }
//     }
//   }
// });
export { ProductType, ProductTypesType }
