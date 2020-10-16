
import {
  GET_CLOTHING,
  MOVE_FORWARD,
  MOVE_BACKWARD,
  // GET_IMAGES,
  RESET_SURVEY
} from './actions'

const surveyInitialState = {
  views: ['survey-start'],
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
      // const types = action.products.reduce((typeArray, product) => {
      //   if (!typeArray.includes(product.type)) {
      //     typeArray.push(product.type)
      //   }
      //   return typeArray
      // }, [])
      // types.forEach(type => state.views.push(type));
      state.views.push("middle");
      state.views.push("survey-finish");
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
