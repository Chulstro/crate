// App Imports
import params from '../../config/params'
import models from '../../setup/models'

// Get Survey Products
export async function getSurveyProducts()  {
  return await models.surveyProducts.findAll({ order: [['id', 'ASC']] })
}
