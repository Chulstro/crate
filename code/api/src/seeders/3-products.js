'use strict';

const params = require('../config/params');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      //Punk
      {
        name: 'Punk Belt',
        slug: 'belt-thats-punk',
        description: 'A dark, ringed masterpiece',
        type: params.product.types.accessory.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/punk-belt.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Punk Belt',
        slug: 'belt-thats-punk',
        description: 'A dark, ringed masterpiece',
        type: params.product.types.accessory.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/punk-belt.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Punk Watch',
        slug: 'watch-thats-punk',
        description: 'Grim reminder of your time on earth',
        type: params.product.types.accessory.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/punk-watch.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Punk Watch',
        slug: 'watch-thats-punk',
        description: 'Grim reminder of your time on earth',
        type: params.product.types.accessory.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/punk-watch.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Womens Punk Top',
        slug: 'punk-woman-top',
        description: 'Straps and leather baby',
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/punk-top-female.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mens Punk Top',
        slug: 'punk-man-top',
        description: 'Leather as dark as your outlook',
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/punk-top-male.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Punk Pants',
        slug: 'punk-pants',
        description: 'Ooooo look at those chains',
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/punk-pants.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Punk Pants',
        slug: 'punk-pants',
        description: 'Ooooo look at those chains',
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/punk-pants.jpg',
        styleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Sporty
      {
        name: 'Sporty Sunglasses',
        slug: 'sporty-sunglasses',
        description: 'Hide your eyes from the awesome',
        type: params.product.types.accessory.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/sporty-sunglasses.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sporty Sunglasses',
        slug: 'sporty-sunglasses',
        description: 'Hide your eyes from the awesome',
        type: params.product.types.accessory.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/sporty-sunglasses.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sporty Mens Pants',
        slug: 'sporty-man-pants',
        description: 'Sweats for comfort and movement',
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/sporty-pants-male.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sporty Womens Pants',
        slug: 'sporty-woman-pants',
        description: 'High waisted for both comfort and movement',
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/sporty-pants-female.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sporty Mens Shirt',
        slug: 'sporty-man-shirt',
        description: 'Looks good and breathes better',
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/sporty-top-male.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sporty Womens Shirt',
        slug: 'sporty-woman-shirt',
        description: 'Made for ease of movement',
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/sporty-top-female.jpg',
        styleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Casual
      {
        name: 'Casual Watch',
        slug: 'casual-watch',
        description: 'Simple but effective design',
        type: params.product.types.accessory.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/casual_watch.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Casual Watch',
        slug: 'casual-watch',
        description: 'Simple but effective design',
        type: params.product.types.accessory.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/casual_watch.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Casual Womens Top',
        slug: 'casual-top-female',
        description: 'Simple but elegant',
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/casual_top_female.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Casual Mens Top',
        slug: 'casual-top-male',
        description: 'Simple and comfortable',
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/casual_top_male.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Casual Womens Pants',
        slug: 'casual-pants-female',
        description: 'Functional and great',
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/casual_pants_female.jpeg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Casual Mens Pants',
        slug: 'casual-pants-male',
        description: 'Functional and great for friday',
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/casual_pants_male.jpg',
        styleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Formal

      //Given
      {
        name: 'Belt for Women',
        slug: 'belt-for-women',
        description: 'A very nice belt for women.',
        type: params.product.types.accessory.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/belt-female.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Belt for Men',
        slug: 'belt-for-men',
        description: 'A very nice belt for men.',
        type: params.product.types.accessory.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/belt-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Watch for Women',
        slug: 'watch-for-women',
        description: 'A very nice watch for women.',
        type: params.product.types.accessory.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/watch-female.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Watch for Men',
        slug: 'watch-for-men',
        description: 'A very nice watch for men.',
        type: params.product.types.accessory.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/watch-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt for Women - Black',
        slug: 't-shirt-for-women-black',
        description: 'A very nice black t-shirt for women.',
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/t-shirt-female-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt for Women - Grey',
        slug: 't-shirt-for-women-grey',
        description: 'A very nice grey t-shirt for women.',
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/t-shirt-female-2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt for Men - White',
        slug: 't-shirt-for-men-white',
        description: 'A very nice white t-shirt for men.',
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/t-shirt-male-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt for Men - Grey',
        slug: 't-shirt-for-men-grey',
        description: 'A very nice grey t-shirt for men.',
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/t-shirt-male-2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
}
