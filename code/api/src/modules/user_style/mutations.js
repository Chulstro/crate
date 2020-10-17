// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import UserStyleType from './types'
import { create } from './resolvers'

// UserStyle create
export const createUserStyle = {
  type: UserStyleType,
  args: {
    styleId: {
      name: 'styleId',
      type: GraphQLInt
    },
    userId: {
      name: 'userId',
      type: GraphQLInt
    }
  },
  resolve: create
}
