// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const GET_CLOTHING = 'SURVEY/GET_CLOTHING'
export const GET_WOMENS_CLOTHING = 'SURVEY/GET_WOMENS_CLOTHING'
export const GET_MENS_ACCESSORIES = 'SURVEY/GET_MENS_ACCESSORIES'
export const GET_WOMENS_ACCESSORIES = 'SURVEY/GET_WOMENS_ACCESSORIES'
export const GET_ALL_MENS_CLOTHING = 'SURVEY/GET_ALL_MENS_CLOTHING'
export const GET_ALL_WOMENS_CLOTHING = 'SURVEY/GET_ALL_WOMENS_CLOTHING'
export const MOVE_FORWARD = 'SURVEY/MOVE_FORWARD'
export const MOVE_BACKWARD = 'SURVEY/MOVE_BACKWARD'
// export const GET_PRODUCTS = 'SURVEY/GET_PRODUCTS'
// export const GET_IMAGES = 'SURVEY/GET_IMAGES'
export const RESET_SURVEY = 'SURVEY/RESET_SURVEY'
export const SELECT_CLOTHING = 'SURVEY/SELECT_CLOTHING'

export const setSurveyType = crateId => (
  dispatch => {
    axios.post(routeApi, query({
      operation: 'surveyProducts',
      fields: ['id', 'name', 'image']
    }))
      .then(response => {
        dispatch({
          type: GET_CLOTHING,
          products: response.data.data.surveyProducts,
          crateId
        })
      })
      .catch(error => console.error(error))
    }
)

export const selectClothing = event => (
  dispatch => {
    console.log(event.target.classList);
    dispatch({
      type: SELECT_CLOTHING,
      clothingStyle: event.target.classList[1]
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

// export const getProducts = () => (
//   dispatch => {
//     dispatch({
//       type: GET_PRODUCTS
//       products
//     })
//   }
// )

// export const getImages = () => (
//   dispatch => {
//     return axios.get('https://randomfox.ca/images/')
//       .then(response => {
//         dispatch({
//           type: GET_IMAGES,
//           item: response.data
//         })
//       })
//       .catch(error => console.log(error))
//   }
// )

export const resetSurvey = () => (
  dispatch => {
    dispatch({
      type: RESET_SURVEY
    })
  }
)
