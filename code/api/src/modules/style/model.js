'use strict'

module.exports = function(sequelize, DataTypes) {
  let Style = sequelize.define('styles', {
    name: {
      type: DataTypes.STRING
    }
  })

  Style.associate = function(models) {
    Style.hasMany(models.Products)
  }

  return Style
}
