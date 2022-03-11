module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // exclude: ["node_module"],
  };
};
