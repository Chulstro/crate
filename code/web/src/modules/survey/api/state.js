
import {
  GET_MENS_CLOTHING,
  MOVE_FORWARD
} from './actions'

const surveyInitialState = {
  views: ['survey-start', 'tops', 'bottoms', 'accessories', 'shoes', 'survey-finish'],
  currentView: 0,
  crateId: null,
  isLoading: false,
  error: null,
  clothingList: []
}

export const surveyInfo = (state = surveyInitialState, action) => {
  switch (action.type) {
    case GET_MENS_CLOTHING:
      state.crateId = action.crateId;
      return {...state};
    case MOVE_FORWARD:
      state.currentView += 1;
      return {...state};
    default:
      return {...state};
  }
}