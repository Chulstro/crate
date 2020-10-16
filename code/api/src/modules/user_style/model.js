'use strict'

module.exports = function(sequelize, DataTypes) {
  let UserStyles = sequelize.define('user_styles', {
    userId: {
      type: DataTypes.INTEGER
    },
    styleId: {
      type: DataTypes.INTEGER
    }
  })

  UserStyles.associate = function(models) {
    UserStyles.belongsTo(models.User)
    UserStyles.belongsTo(models.Style)
  }

  return UserStyles
}
