module.exports = {
    routes: [
      {
        method: "POST",
        path: "/post/postCreate",
        handler: "post.createPost",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };