'use strict'

// SurveyProducts
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('surveyProducts', {
    styleId: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    },
    category: {
      type: DataTypes.STRING
    }
  })
}
