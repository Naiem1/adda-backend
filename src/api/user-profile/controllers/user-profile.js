"use strict";

/**
 * user-profile controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::user-profile.user-profile",
  (strapi) => ({
    async createMe(ctx, _next) {
      // get user from context
      const user = ctx.state.user;
      console.log(user.id);
      // get request body data from context
      const { data } = ctx.request.body;
      //   console.log(data);
      // use the create method from Strapi enitityService
      const profile = await strapi.entityService.create(
        "api::user-profile.user-profile",
        {
          data: {
            name: "Name- 1",
            "ctx.request.body.data.users_permissions_user": user.id,
          },
        }
      );

      // console.log('profile>>', profile);
      return { profile };
    },

    // async create(ctx) {
    //   try {
    //     const user = ctx.state.user;
    //     ctx.request.body.data.users_permissions_user = user.id;
    //     console.log(ctx.request.body.data.users_permissions_user);

    //     console.log({ ...ctx.request.body });
    //     const profile = await strapi.entityService.create(
    //       "api::user-profile.user-profile",
    //       {
    //         ...ctx.request.body,
    //       }
    //     );
    //     console.log("profile>>", profile);
    //     return  profile ;
    //   } catch (err) {
    //     ctx.body = err;
    //   }
    // },

    async create(ctx) {
      try {
        const { username, password, email } = ctx.state.user;
        const user = ctx.state.user;
        ctx.request.body.data.users_permissions_user = user.id;
        console.log(ctx.request.body.data.users_permissions_user);

        console.log({ ...ctx.request.body });
        const profile = await strapi.entityService.create(
          "api::user-profile.user-profile",
         
            ctx.request.body,
         
        );
        console.log("profile>>", profile);
        return profile;
      } catch (err) {
        ctx.body = err;
      }
    },
  })
);
