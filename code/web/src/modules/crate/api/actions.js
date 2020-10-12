// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const CRATES_GET_LIST_REQUEST = 'CRATES/GET_LIST_REQUEST'
export const CRATES_GET_LIST_RESPONSE = 'CRATES/GET_LIST_RESPONSE'
export const CRATES_GET_LIST_FAILURE = 'CRATES/GET_LIST_FAILURE'
export const CRATES_GET_REQUEST = 'CRATES/GET_REQUEST'
export const CRATES_GET_RESPONSE = 'CRATES/GET_RESPONSE'
export const CRATES_GET_FAILURE = 'CRATES/GET_FAILURE'

// Actions

// Get list of crates
//Uses the action types for crates list that changes isLoading and error message based on respose success/failure
// axios post takes in a route and a query objects
// returned promise from post takes the response obj and assigns it to list that is dispatched to store
// i think we will need something similiar for style request 
export function getList(orderBy = 'DESC', isLoading = true) {
  return dispatch => {
    dispatch({
      type: CRATES_GET_LIST_REQUEST,
      error: null,
      isLoading
    })

    return axios.post(routeApi, query({
      operation: 'crates',
      variables: { orderBy },
      fields: ['id', 'name', 'description', 'createdAt', 'updatedAt']
    }))
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: CRATES_GET_LIST_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.crates
          })
        } else {
          console.error(response)
        }
      })
      .catch(error => {
        dispatch({
          type: CRATES_GET_LIST_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single crate
export function get(slug, isLoading = true) {
  return dispatch => {
    dispatch({
      type: CRATES_GET_REQUEST,
      isLoading
    })

    return axios.post(routeApi, query({
      operation: 'crate',
      variables: { slug },
      fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt']
    }))
      .then(response => {
        dispatch({
          type: CRATES_GET_RESPONSE,
          error: null,
          isLoading: false,
          item: response.data.data.crate
        })
      })
      .catch(error => {
        dispatch({
          type: CRATES_GET_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single crate by Id
export function getById(crateId) {
  return dispatch => {
    return axios.post(routeApi, query({
      operation: 'crateById',
      variables: { crateId },
      fields: ['id', 'name', 'description']
    }))
  }
}

// Create or update crate
export function createOrUpdate(crate) {
  if (crate.id > 0) {
    return update(crate)
  } else {
    delete crate.id
    return create(crate)
  }
}

// Create crate
// this is where crate is created based on crate id. Id comes from routeApi?
// mutation is a change, so a change via post
export function create(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'crateCreate',
      variables,
      fields: ['id']
    }))
  }
}

// Update crate
export function update(crate) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'crateUpdate',
      variables: crate,
      fields: ['id']
    }))
  }
}

// Remove crate
export function remove(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'crateRemove',
      variables,
      fields: ['id']
    }))
  }
}
