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
        method: "GET",
        path: "/findData",
        handler: "post.findData",
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: "GET",
        path: "/post/:id/findcomments",
        handler: "post.comment",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };