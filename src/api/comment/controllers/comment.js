"use strict";

/**
 * comment controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::comment.comment", (strapi) => ({
  async comment(ctx) {
    try {
      // const { username, password, email } = ctx.state.user;
      const user = ctx.state.user;
      ctx.request.body.data.user = user.id;
      ctx.request.body.data.post = ctx.params.id;
      // ctx.request.body.data.email = user.email;
      // console.log(ctx.request.body.data.user);
      //  const ctx = ctx.request.body;
      console.log(ctx);

      //   console.log({ ...ctx.request.body });
      console.log("user>>", ctx.request.body.data.user);
      console.log("post>>", ctx.request.body.data.post);
      const response = await super.create(ctx);
      console.log(response);
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
  async findComment(ctx) {
    try {
      // const user = ctx.state.user;
      // console.log('findComment');
      // console.log(user);
      // console.log(ctx.response)
      // ctx.request.body.data.user = user.id;
      // ctx.request.body.data.post = ctx.params.id;
      // console.log("user>>", ctx.request.body.data.user);
      // console.log("post>>", ctx.request.body.data.post);

      const { data, meta } = await super.findOne(ctx);
      console.log({ data, meta });

      // return {data, meta};
    } catch (error) {
      ctx.body = error;
    }
  },
  // async find(ctx) {
  //   const user = ctx.state.user;
  //   // console.log(user)
  //   if (!user) {
  //     return ctx.badRequest(null, [{messages: [{id: "No auth header found"}]}])
  //   }

  //   // console.log('entityService>>', await strapi.entityValidator)

  //   // const data = await strapi.entityService.findMany("api::comment.comment", {
  //   //   populate: 'user',
  //   //   filters: {
  //   //     "user": {
  //   //       "id": user.id
  //   //     }
  //   //   },

  //   // });

  //   // if (!data) {
  //   //   return ctx.notFound();
  //   // }

  //   // const sanitizedEvents = await sanitizeOutput(data, ctx);

  //   // return (sanitizedEvents);
  // }

  async create(ctx) {
    try {
      // const { username, password, email } = ctx.state.user;
     
      const user = ctx.state.user;
      ctx.request.body.data.user = user.id;
      ctx.request.body.data.username = user.username;
      ctx.request.body.data.post = ctx.params.id;

      console.log({ ...ctx.request.body });
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
