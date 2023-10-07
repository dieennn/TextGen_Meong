var dotenvConfig = require("dotenv").config();
var _ = require("lodash");
var path = require("path");
var webpack = require("webpack");
var ionicWebpackFactory = require(process.env.IONIC_WEBPACK_FACTORY);

function getPlugins() {
  var plugins = [
    new webpack.DefinePlugin({
      "process.env": _(process.env)
        .pick(_.keys(dotenvConfig))
        .mapValues((v) => JSON.stringify(v))
        .value(),
    }),
  ];
  // for dev builds, use our custom environment
  return [...plugins, ionicWebpackFactory.getIonicEnvironmentPlugin()];
}
module.exports = {
  plugins: getPlugins(),
};
