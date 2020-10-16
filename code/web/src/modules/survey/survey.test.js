import { surveyInfo } from './api/state'

describe('Survey Info', () => {
  it('should have a move forward case', () => {
    const fakeState = {
        views: ['survey-start', 'tops', 'bottoms', 'accessories', 'shoes', 'survey-finish'],
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
})
