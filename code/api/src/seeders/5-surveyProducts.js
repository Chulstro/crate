'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
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
        category: 'Womens Punk Top',
        image: '/images/stock/punk-top-female.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Mens Punk Top',
        image: '/images/stock/punk-top-male.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Punk Pants',
        image: '/images/stock/punk-pants.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Punk Pants',
        image: '/images/stock/punk-pants.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Sporty
      {
        category: 'Sporty Sunglasses',
        image: '/images/stock/sporty_sunglasses.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Sporty Sunglasses',
        image: '/images/stock/sporty_sunglasses.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Sporty Mens Pants',
        image: '/images/stock/sporty_pants_male.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Sporty Womens Pants',
        image: '/images/stock/sporty_pants_female.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Sporty Mens Shirt',
        image: '/images/stock/sporty_top_male.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Sporty Womens Shirt',
        image: '/images/stock/sporty_top_female.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Casual
      {
        category: 'Casual Watch',
        image: '/images/stock/casual_watch.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Casual Watch',
        image: '/images/stock/casual_watch.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Casual Womens Top',
        image: '/images/stock/casual_top_female.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Casual Mens Top',
        image: '/images/stock/casual_top_male.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Casual Womens Pants',
        image: '/images/stock/casual_pants_female.jpeg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Casual Mens Pants',
        image: '/images/stock/casual_pants_male.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Formal

      //Given
      {
        category: 'Belt for Women',
        image: '/images/stock/belt-female.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Belt for Men',
        image: '/images/stock/belt-male.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Watch for Women',
        image: '/images/stock/watch-female.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Watch for Men',
        image: '/images/stock/watch-male.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'T-Shirt for Women - Black',
        image: '/images/stock/t-shirt-female-1.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'T-Shirt for Women - Grey',
        image: '/images/stock/t-shirt-female-2.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'T-Shirt for Men - White',
        image: '/images/stock/t-shirt-male-1.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'T-Shirt for Men - Grey',
        image: '/images/stock/t-shirt-male-2.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Vintage
      {
        category: 'Belt for Women',
        image: '/images/stock/belt-female.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Belt for Men',
        image: '/images/stock/belt-male.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Watch for Women',
        image: '/images/stock/watch-female.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Watch for Men',
        image: '/images/stock/watch-male.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'T-Shirt for Women - Black',
        image: '/images/stock/t-shirt-female-1.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'T-Shirt for Women - Grey',
        image: '/images/stock/t-shirt-female-2.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'T-Shirt for Men - White',
        image: '/images/stock/t-shirt-male-1.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'T-Shirt for Men - Grey',
        image: '/images/stock/t-shirt-male-2.jpg',
        styleId: 3,

        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('styleProducts', null, {});
  }
}
