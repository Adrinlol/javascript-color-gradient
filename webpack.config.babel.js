const path = require("path");

const include = path.join(__dirname, "src");

export default {
  entry: "./src/index",
  output: {
    path: include,
    libraryTarget: "umd",
    library: "javascriptColorGradient",
  },
  devtool: "source-map",
};
