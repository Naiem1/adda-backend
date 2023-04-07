module.exports = {
    routes: [
      {
        method: "POST",
        path: "/post",
        handler: "post.createPost",
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: "POST",
        path: "/post/:id/commentCreator",
        handler: "post.comment",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };