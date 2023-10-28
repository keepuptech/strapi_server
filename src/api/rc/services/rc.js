'use strict';

/**
 * rc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rc.rc');
