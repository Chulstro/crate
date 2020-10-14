
import {
  GET_MENS_CLOTHING
} from './actions'

const clothingInitialState = {
  crateId: null,
  isLoading: false,
  error: null,
  list: []
}

export const clothing = (state = clothingInitialState, action) => {
  switch (action.type) {
    case GET_MENS_CLOTHING:
      state.crateId = action.crateId;
      return {...state};
    default:
      return {...state};
  }
}