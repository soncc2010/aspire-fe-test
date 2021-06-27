module.exports = {
  devServer: {
    port: 888,
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/abstracts/_abstracts.scss";
        `,
      },
    },
  },
};
