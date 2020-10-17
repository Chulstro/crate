'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('surveyProducts', [
      //Punk
      {
        category: 'belt',
        image: '/images/stock/punk-belt.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'belt',
        image: '/images/stock/punk-belt.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'watch',
        image: '/images/stock/punk-watch.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'watch',
        image: '/images/stock/punk-watch.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/punk-top-female.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/punk-top-male.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'bottoms',
        image: '/images/stock/punk-pants.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'bottoms',
        image: '/images/stock/punk-pants.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Sporty
      {
        category: 'sunglasses',
        image: '/images/stock/sporty-sunglasses.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'sunglasses',
        image: '/images/stock/sporty-sunglasses.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'bottoms',
        image: '/images/stock/sporty-pants-male.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'bottoms',
        image: '/images/stock/sporty-pants-female.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/sporty-top-male.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/sporty-top-female.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Casual
      {
        category: 'watches',
        image: '/images/stock/casual_watch.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'watches',
        image: '/images/stock/casual_watch.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/casual_top_female.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/casual_top_male.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'bottoms',
        image: '/images/stock/casual_pants_female.jpeg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'bottoms',
        image: '/images/stock/casual_pants_male.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Formal

      //Given
      {
        category: 'belts',
        image: '/images/stock/belt-female.jpg',
        styleId: 4,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'belts',
        image: '/images/stock/belt-male.jpg',
        styleId: 4,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'watches',
        image: '/images/stock/watch-female.jpg',
        styleId: 4,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'watches',
        image: '/images/stock/watch-male.jpg',
        styleId: 4,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/t-shirt-female-1.jpg',
        styleId: 4,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/t-shirt-female-2.jpg',
        styleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/t-shirt-male-1.jpg',
        styleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/t-shirt-male-2.jpg',
        styleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Vintage
      {
        category: 'belts',
        image: '/images/stock/belt-female.jpg',
        styleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'belts',
        image: '/images/stock/belt-male.jpg',
        styleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'watches',
        image: '/images/stock/watch-female.jpg',
        styleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'watches',
        image: '/images/stock/watch-male.jpg',
        styleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/t-shirt-female-1.jpg',
        styleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/t-shirt-female-2.jpg',
        styleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/t-shirt-male-1.jpg',
        styleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'tops',
        image: '/images/stock/t-shirt-male-2.jpg',
        styleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('styleProducts', null, {});
  }
}
