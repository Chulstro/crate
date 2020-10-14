// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const GET_MENS_CLOTHING = 'SURVEY/GET_MENS_CLOTHING'
export const GET_WOMENS_CLOTHING = 'SURVEY/GET_WOMENS_CLOTHING'
export const GET_MENS_ACCESSORIES = 'SURVEY/GET_MENS_ACCESSORIES'
export const GET_WOMENS_ACCESSORIES = 'SURVEY/GET_WOMENS_ACCESSORIES' 
export const GET_ALL_MENS_CLOTHING = 'SURVEY/GET_ALL_MENS_CLOTHING'
export const GET_ALL_WOMENS_CLOTHING = 'SURVEY/GET_ALL_WOMENS_CLOTHING'

export const setSurveyType = crateId => (
  dispatch => {
    dispatch({
      type: GET_MENS_CLOTHING,
      crateId
    })
  }
)



