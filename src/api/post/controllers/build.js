module.exports = {
  generate: async (ctx, next) => {
    const { _id } = ctx.params;
    console.log(_id);
  },
};
