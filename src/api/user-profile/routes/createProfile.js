module.exports = {
    routes: [
      {
        method: "POST",
        path: "/profile/me",
        handler: "user-profile.create",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };