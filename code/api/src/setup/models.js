// Imports
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from './database'

const models = {
  User: databaseConnection.import('../modules/user/model'),
  Product: databaseConnection.import('../modules/product/model'),
  Crate: databaseConnection.import('../modules/crate/model'),
  Subscription: databaseConnection.import('../modules/subscription/model'),
  Style: databaseConnection.import('../modules/style/model'),
  UserStyle: databaseConnection.import('../modules/user_style/model')
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
