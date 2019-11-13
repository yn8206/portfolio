module.exports = {
  css: {
    sourceMap: true,
  },
  chainWebpack: (config) => {
    config.module.rules.delete('eslint');
  },
};
