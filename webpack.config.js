const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: "./src/index.ts",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: { node: "16" } }], "@babel/preset-typescript"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: "#!/usr/bin/env node",
      raw: true,
    }),
  ],
  optimization: {
    minimize: isProduction,
  },
};
