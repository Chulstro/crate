// partnered with the actions file in the same directory, this will contain all
// reducers

import { 
  GET_MENS_CLOTHING, 
  GET_WOMENS_CLOTHING, 
  /* all the other actions */ 
} from './actions';

export default (state = surveyInitialState, action) => {
  switch (action.type) {
    case GET_MENS_CLOTHING: 
      return {
        // all men's clothing, however it's defined
      }
    case GET_WOMENS_CLOTHING: 
      return {
        // all women's clothing, however it's defined
      }
    // so on and so forth
  }
}