'use strict'

// SurveyProducts
module.exports = function(sequelize, DataTypes) {
  let SurveyProduct = sequelize.define('surveyProducts', {
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

  SurveyProduct.associate = function(models) {
    SurveyProduct.belongsTo(models.Style);
  }

  return SurveyProduct
}
