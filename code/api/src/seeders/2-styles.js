'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('styles', [
      {
        name: "Punk",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sporty",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Casual",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Formal",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vintage",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  }
}
