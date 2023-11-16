"use strict";

/**
 * student controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::student.student", ({ strapi }) => ({
  async findOne(ctx) {
    const response = await super.findOne(ctx);

    console.log("res", response);
    /**
     * Queries the Restaurants collection type
     * using the Entity Service API
     * to retrieve information about the restaurant.
     */
    //  const entry = await strapi.db.query('api::blog.article').findOne({
    //     select: ['title', 'description'],
    //     where: { title: 'Hello World' },
    //     populate: { category: true },
    //   });
    /**
     * Creates a new entry for the Reviews collection type
     * and populates data with information about the restaurant's owner
     * using the Entity Service API.
     */
    // const newReview = await strapi.entityService.create('api::review.review', {
    //   data: {
    //     note: body.note,
    //     content: body.content,
    //     restaurant: restaurants[0].id,
    //     author: user.id,
    //   },
    //   populate: ['restaurant.owner'],
    // });

    return response;
  },
}));
