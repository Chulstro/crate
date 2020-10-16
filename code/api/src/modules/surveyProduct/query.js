// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { SurveyProductType } from './types'
import { getSurveyProducts } from './resolvers'


// // Survey Products
export const surveyProducts = {
  type: new GraphQLList(SurveyProductType),
  resolve: getSurveyProducts
}
