const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const rev = "1";
const jsOutputFname = `bundle.${rev}.js`;

module.exports = {
  entry: "./src/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ ".ts" ]
  },
  output: {
    filename: jsOutputFname,
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "App Title",
      template: "./src/index.html",
      inject: false,
      jsOutputFname: jsOutputFname,
    })
  ],
};
