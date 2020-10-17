import { surveyInfo } from './api/state'

describe('Survey Info', () => {
  it('should have a move forward case', () => {
    const fakeState = {
        views: ['survey-start'],
        currentView: 0,
        crateId: null,
        isLoading: false,
        error: null,
        clothingList: []
      }

    const result = surveyInfo(fakeState, {type: "SURVEY/MOVE_FORWARD"})

    expect(result.currentView).toEqual(1);
  })

  it('should have a move backward case', () => {
    const fakeState = {
        views: ['survey-start', 'tops', 'bottoms', 'accessories', 'shoes', 'survey-finish'],
        currentView: 2,
        crateId: null,
        isLoading: false,
        error: null,
        clothingList: []
      }

    const result = surveyInfo(fakeState, {type: "SURVEY/MOVE_BACKWARD"})

    expect(result.currentView).toEqual(1);
  })

  it('should reset style', () => {
    const fakeState = {
        views: ['survey-start'],
        currentView: 2,
        crateId: null,
        isLoading: false,
        error: null,
        clothingList: []
      }

    const result = surveyInfo(fakeState, {type: 'SURVEY/RESET_SURVEY'})

    expect(result.currentView).toEqual(0);
  })

  it('should reset style', () => {
    const fakeState = {
      views: ['survey-start'],
      currentView: 0,
      crateId: null,
      isLoading: false,
      error: null,
      clothingList: [],
      selectedClothing: {},
      userStyle: ""
      }

    const result = surveyInfo(fakeState, {type: 'SURVEY/SUBMIT_SURVEY'})
    expect(result.currentView).toEqual(0);
  })

 it('should select clothing', () => {
    const fakeState = {
      views: ['survey-start'],
      currentView: 0,
      crateId: null,
      isLoading: false,
      error: null,
      clothingList: [],
      selectedClothing: {},
      userStyle: ""
      }

    const result = surveyInfo(fakeState, {type: 'SURVEY/SELECT_CLOTHING'})
    expect(result.selectedClothing).toMatchObject({ selectedClothing: 'bottoms' });
  })
})
