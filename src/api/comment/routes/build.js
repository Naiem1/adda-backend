module.exports = {
    routes: [
      {
        method: "POST",
        path: "/post/:id/comment",
        handler: "comment.comment",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    
    ],
  };