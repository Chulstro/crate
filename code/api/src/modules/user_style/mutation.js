// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import { UserStyleType } from './types'

import { create } from './resolvers'

export const createUserStyle = {
  type: StyleType,
  args: {
    styleId: {
      name: 'styleId',
      type: GraphQLInt
    }
  },
  resolve: create
