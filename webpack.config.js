"use strict";

const path = require("path");

const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const cesiumSource = "node_modules/cesium/Source";
const cesiumWorkers = "../Build/Cesium/Workers";

module.exports = (env, args) => {
  const prod = args.mode === "production";
  return {
    context: __dirname,
    devServer: {
      hot: true,
      port: 3000,
      open: true,
    },
    devtool: !prod ? void 0 : "eval-source-map",
    entry: ["./src/index"],
    mode: prod ? "production" : "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader","sass-loader"],
        },
        {
          test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
          use: ["url-loader"],
        },
        ...[
          prod
            ? {
                // Strip cesium pragmas
                test: /\.js$/,
                enforce: "pre",
                include: path.resolve(__dirname, cesiumSource),
                use: [
                  {
                    loader: "strip-pragma-loader",
                    options: {
                      pragmas: {
                        debug: false,
                      },
                    },
                  },
                ],
              }
            : {},
        ],
      ],
    },
    output: {
      path: path.join(__dirname, "build"),
    },
    plugins: [
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("/"),
      }),
      new CopyPlugin([
        {
          from: path.join(cesiumSource, cesiumWorkers),
          to: "Workers",
        },
        {
          from: path.join(cesiumSource, "Assets"),
          to: "Assets",
        },
        {
          from: path.join(cesiumSource, "Widgets"),
          to: "Widgets",
        },
        { from: "src/logic/img", to: "img" }
      ]),
      new HtmlPlugin({
        template: "index.html",
      }),
      ...(prod ? [] : [new webpack.HotModuleReplacementPlugin()]),
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        ...(prod
          ? {}
          : {
              "react-dom": "@hot-loader/react-dom",
            }),
        cesium$: "cesium/Cesium",
        cesium: "cesium/Source",
      },
    },
  };
};
