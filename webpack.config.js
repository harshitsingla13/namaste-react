const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
  entry: "/src/App.js",
  output: { path: path.resolve(__dirname, "dist") },
  devServer: {
    inline: true,
    contentBase: "./dist",
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({ template: "./src/index.html" }),
    new BundleAnalyzerPlugin(),
  ],
  mode: "development",
};
