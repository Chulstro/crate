// Following codebase convention, importing the component to be exported with
// the path object

import Page from '../../modules/survey/Page';

// Survey routes (following convention from other path files)

export default {
  survey: {
    path: '/style-preferences',
    component: Page
  }
}