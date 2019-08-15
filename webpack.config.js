const path = require("path");
const { execSync } = require("child_process");

const HtmlWebpackPlugin = require("html-webpack-plugin");



const gitRev = execSync("git log -1 --format=%H")
      .toString()
      .trim();
const jsOutputFname = `bundle.${gitRev}.js`;

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
    extensions: [ ".ts", ".js" ]
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
