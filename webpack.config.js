/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

const WebpackBuildNotifierPlugin = require("webpack-build-notifier");
const CompressionPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require("webpack-pwa-manifest");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require("path");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: [
                    "last 1 version",
                    "> 1%",
                    "maintained node versions",
                    "not dead"
                  ]
                }
              ]
            ],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: "none",
      template: "index.html",
      minify: {
        removeAttributeQuotes: false,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new CompressionPlugin({
      algorithm: "gzip"
    }),
    new WebpackPwaManifest({
      filename: "manifest.json",
      orientation: "portrait",
      display: "standalone",
      start_url: "/",
      crossorigin: null,
      inject: true,
      fingerprints: false,
      ios: true,
      publicPath: null,
      includeDirectory: true,
      name: "My Progressive Web App",
      short_name: "MyPWA",
      description: "My awesome Progressive Web App!",
      background_color: "#ffffff",
      theme_color: "#ff0000",
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [48, 72, 96, 144, 192] // multiple sizes
        },
        {
          src: path.resolve("src/assets/icon.png"),
          size: "1024x1024" // you can also use the specifications pattern
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      include: ["index.html", "manifest.json", /\.js$/],
      exclude: [/\/@webcomponents\/webcomponentsjs\//],
      navigateFallback: "index.html",
      swDest: "service-worker.js",
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts.gstatic.com\//,
          handler: "staleWhileRevalidate"
        }
      ]
    }),
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build",
      logo: path.resolve("./static/cropped-favicon.png"),
      suppressSuccess: true
    })
  ]
};
