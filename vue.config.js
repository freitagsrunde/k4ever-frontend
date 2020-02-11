module.exports = {
  lintOnSave: false,
  publicPath: "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "vue-select/src/scss/vue-select.scss"',
      },
      scss: {
        prependData: '@import "vue-select/src/scss/vue-select.scss";',
      },
    }
  },
  transpileDependencies: [
    "vuetify"
  ],
}
