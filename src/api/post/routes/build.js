module.exports = {
    routes: [
      {
        method: "POST",
        path: "/post/build",
        handler: "build.generate",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };