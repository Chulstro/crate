// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// User type
const UserStyleType = new GraphQLObjectType({
  name: 'user_style',
  description: 'User Style type',

  fields: () => ({
    id: { type: GraphQLInt},
    crateId: { type: GraphQLInt },
    styleId: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})
