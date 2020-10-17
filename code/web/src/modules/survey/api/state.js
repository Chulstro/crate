
import {
  GET_CLOTHING,
  MOVE_FORWARD,
  MOVE_BACKWARD,
  RESET_SURVEY,
  SUBMIT_SURVEY,
  SELECT_CLOTHING
} from './actions'

const surveyInitialState = {
  views: ['survey-start'],
  currentView: 0,
  crateId: null,
  isLoading: false,
  error: null,
  clothingList: [],
  selectedClothing: {},
  userStyle: ""
}

export const surveyInfo = (state = surveyInitialState, action) => {
  switch (action.type) {
    case GET_CLOTHING:
      const types = action.products.reduce((typeArray, product) => {
        if (!typeArray.includes(product.category)) {
          typeArray.push(product.category)
        }
        return typeArray
      }, [])

      state.crateId = action.crateId;
      state.clothingList = action.products;
      types.forEach(type => state.views.push(type));
      state.views.push("survey-finish");

      return {...state};
    case SELECT_CLOTHING:
      state.selectedClothing[state.views[state.currentView]] = action.clothingStyle;
      return {...state};
    case MOVE_FORWARD:
      state.currentView += 1;
      return {...state};
    case MOVE_BACKWARD:
      state.currentView -= 1;
      return {...state};
    case RESET_SURVEY:
      state.currentView = 0;
      return {...state}
    case SUBMIT_SURVEY:
      state.currentView += 1;
      state.userStyle = action.style;
      return {...state};
    default:
      return {...state};
  }
}
