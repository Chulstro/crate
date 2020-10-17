import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { UserStyleType } from './types'
import { create } from './resolvers'

export const createUserStyle = {
  type: UserStyleType,
  args: {
    styles: {
      name: 'styles',
      type: GraphQLList
    },

    userId: {
      name: 'user',
      type: GraphQLInt
    }
  },
  resolve: create
}
