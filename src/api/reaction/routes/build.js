module.exports = {
    routes: [
      {
        method: "POST",
        path: "/post/:id/reacts",
        handler: "reaction.reacts",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    
    ],
  };