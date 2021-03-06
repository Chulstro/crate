// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const GET_CLOTHING = 'SURVEY/GET_CLOTHING'
export const MOVE_FORWARD = 'SURVEY/MOVE_FORWARD'
export const MOVE_BACKWARD = 'SURVEY/MOVE_BACKWARD'
export const RESET_SURVEY = 'SURVEY/RESET_SURVEY'
export const SELECT_CLOTHING = 'SURVEY/SELECT_CLOTHING'
export const SUBMIT_SURVEY = 'SURVEY/SUBMIT_SURVEY'

export const startSurvey = crateId => (
  dispatch => {
    axios.post(routeApi, query({
      operation: 'surveyProducts',
      fields: ['id', 'styleId', 'category', 'image']
    }))
      .then(response => {
        dispatch({
          type: GET_CLOTHING,
          products: response.data.data.surveyProducts,
          crateId
        })
      })
      .catch(error => console.error('There\'s an error'))
    }
)

export const selectClothing = event => (
  dispatch => {
    dispatch({
      type: SELECT_CLOTHING,
      clothingStyle: Number(event.target.closest('.Card').classList[2])
    })
  }
)

export const moveForward = () => (
  dispatch => {
    dispatch({
      type: MOVE_FORWARD
    })
  }
)

export const moveBackward = () => (
  dispatch => {
    dispatch({
      type: MOVE_BACKWARD
    })
  }
)

export const submitSurvey = (finalStyle) => {
  return dispatch => {
    axios.post(routeApi, mutation({
      operation: 'createUserStyle',
      variable: finalStyle,
      fields: ['styleId']
    }))
      .then(response => {
        dispatch({
          type: SUBMIT_SURVEY,
          style: response.data.data.style
        })
      })
      .catch(error => console.error('There\'s an error'))
    }
  }

export const resetSurvey = () => (
  dispatch => {
    dispatch({
      type: RESET_SURVEY
    })
  }
)
