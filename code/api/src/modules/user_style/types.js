// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'
import { StyleType } from '../style/types'

// Subscription type
const UserStyleType = new GraphQLObjectType({
  name: 'userStyle',
  description: 'UserStyle Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    style: { type: StyleType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default UserStyleType
