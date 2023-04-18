"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", (strapi) => ({
  async createPost(ctx) {
    try {
      // const { username, password, email } = ctx.state.user;
      const user = ctx.state.user;
      ctx.request.body.data.user = user.id;
      ctx.request.body.data.username = user.username;
      ctx.request.body.data.email = user.email;
      console.log(ctx.request.body.data.user);
      //  const ctx = ctx.request.body;
      console.log(ctx);

      console.log({ ...ctx.request.body });
      console.log(ctx.request.body);
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
  async comment(ctx) {
    try {
      // const { username, password, email } = ctx.state.user;
      console.log("findComment");
      const user = ctx.state.user;
      console.log(user);
      // ctx.request.body.data.user = user.id;
      // ctx.request.body.data.id = ctx.params.id;

      // // console.log("user>>", ctx.request.body.data.user);
      // console.log("id>>", ctx.request.body.data.id);
      // //  const ctx = ctx.request.body;
      // //  console.log(ctx);

      // //   console.log({ ...ctx.request.body });
      // console.log("body", ctx.request.body);
      // console.log("ctx>>", ctx);
      // const {data, meta} = await super.find(ctx);
      // console.log("response>>", {data, meta});
      // //   const entry = await strapi.entityService.create(
      // //     "api::article.article",

      // //     { data: {...ctx.request.body }}
      // //   );
      // //   console.log("article>>", entry);
      // //   return entry;
      // return {data, meta};
    } catch (err) {
      ctx.body = err;
    }
  },

  async findData(ctx) {
    console.log(strapi);

    const posts = await strapi.db.query("api:post:post").findMany({
      where: {
        title: {
          $eq: "nextjs",
        },
        populate: ["user"],
      },
    });
    console.log(posts);
  },
  async create(ctx) {
    try {
      // const { username, password, email } = ctx.state.user;
      const user = ctx.state.user;
      ctx.request.body.data.user = user.id;
      ctx.request.body.data.username = user.username;
      ctx.request.body.data.email = user.email;
      console.log(ctx.request.body.data.user);
      //  const ctx = ctx.request.body;
      console.log(ctx);

      console.log({ ...ctx.request.body });
      console.log(ctx.request.body);
      const response = await super.create(ctx);
      console.log(response);
      
      return response;
    } catch (err) {
      ctx.body = err;
    }
  },
}));

// module.exports = {
//   async find(ctx, next) {
//     const entries = await strapi.db.query('api::post.post').findMany({
//       where: {
//         authors: {
//           hobby: {
//             $contains: 'Dance'
//           },
//         }
//       },
//     });
//     ctx.body = entries;
//   }
// };
