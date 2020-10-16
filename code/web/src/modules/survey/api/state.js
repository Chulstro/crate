
import {
  GET_CLOTHING,
  MOVE_FORWARD,
  MOVE_BACKWARD,
  // GET_IMAGES,
  RESET_SURVEY
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
    case GET_CLOTHING:
      state.crateId = action.crateId;
      state.clothingList = action.products;
      console.log(action.products);
      return {...state};
    case MOVE_FORWARD:
      state.currentView += 1;
      return {...state};
    case MOVE_BACKWARD:
      state.currentView -= 1;
      return {...state};
    // case GET_IMAGES:
    //   state.clothingList.push(action.item);
    //   return {...state}
    case RESET_SURVEY:
      state.currentView = 0;
      return {...state}
    default:
      return {...state};
  }
}
