
import {
  GET_MENS_CLOTHING
} from './actions'

const surveyInitialState = {
  crateId: null,
  isLoading: false,
  error: null,
  list: []
}

export const surveyInfo = (state = surveyInitialState, action) => {
  switch (action.type) {
    case GET_MENS_CLOTHING:
      state.crateId = action.crateId;
      return {...state};
    default:
      return {...state};
  }
}