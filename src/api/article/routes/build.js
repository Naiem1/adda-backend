module.exports = {
    routes: [
      {
        method: "POST",
        path: "/article/createArticle",
        handler: "article.createArticle",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };