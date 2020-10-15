// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Product type
const StyleType = new GraphQLObjectType({
  name: 'style',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})
