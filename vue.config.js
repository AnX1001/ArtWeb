module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/styling.scss";`,  //make scss variables and mixins globally 
      },
    },
  },
};
