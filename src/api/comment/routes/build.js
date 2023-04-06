module.exports = {
    routes: [
      {
        method: "POST",
        path: "/post/commentCreate",
        handler: "comment.createComment",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };