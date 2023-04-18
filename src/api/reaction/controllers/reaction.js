"use strict";

/**
 * reaction controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::reaction.reaction", (strapi) => ({
  async reacts(ctx) {
    try {
      const user = ctx.state.user;
      ctx.request.body.data.user = user.id;
      ctx.request.body.data.username = user.username;
      ctx.request.body.data.post = ctx.params.id;

      console.log("user>>", ctx.request.body.data.user);
      console.log("post>>", ctx.request.body.data.post);
      const response = await super.create(ctx);
      console.log(response);

      return response;
    } catch (err) {
      ctx.body = err;
    }
  },
}));
