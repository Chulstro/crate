// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import { StyleType } from '../style/types'

// Survey Product type
const SurveyProductType = new GraphQLObjectType({
  name: 'surveyProduct',
  description: 'Survey Product Type',

  fields: () => ({
    id: { type: GraphQLInt },
    category: { type: GraphQLString },
    image: { type: GraphQLString },
    style: { type: StyleType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export { SurveyProductType }
