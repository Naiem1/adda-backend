"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", (strapi) => ({
    async create (ctx) {
      const {title, content} = ctx.request.body;
      
        
        console.log('OUTPUT>>', ctx);
      },
}));
