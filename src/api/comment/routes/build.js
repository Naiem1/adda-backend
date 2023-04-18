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
      {
        method: "GET",
        path: "/post/:id/comment",
        handler: "comment.findComment",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    
    ],
  };