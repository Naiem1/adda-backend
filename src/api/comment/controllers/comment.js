'use strict';

/**
 * comment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comment.comment', (strapi) => ({
    async comment(ctx) {
      try {
        // const { username, password, email } = ctx.state.user;
        const user = ctx.state.user;
        ctx.request.body.data.user = user.id;
        ctx.request.body.data.post = ctx.params.id;
        // ctx.request.body.data.email = user.email;
        // console.log(ctx.request.body.data.user);
      //  const ctx = ctx.request.body;
      //  console.log(ctx);
  
      //   console.log({ ...ctx.request.body });
      console.log('user>>', ctx.request.body.data.user);
      console.log('post>>', ctx.request.body.data.post);
        const response = await super.create(ctx);
        console.log(response)
      //   const entry = await strapi.entityService.create(
      //     "api::article.article",
  
      //     { data: {...ctx.request.body }}
      //   );
      //   console.log("article>>", entry);
      //   return entry;
      return response;
      } catch (err) {
        ctx.body = err;
      }
    },
  }));
