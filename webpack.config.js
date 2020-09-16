const webpack = require("webpack");
const { SourceMapDevToolPlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const fs = require("fs");

const lessToJs = require("less-vars-to-js");
const theme = lessToJs(
  fs.readFileSync(path.join(__dirname, "./src/design/ant-default-vars.less"), "utf8")
);

const isDirectory = pathFolder => fs.statSync(pathFolder).isDirectory();
const getDirectories = pathFolder => fs.readdirSync(pathFolder).map(name => path.join(pathFolder, name)).filter(isDirectory);
const getDirectoriesRecursively = (pathFolder) => {
    let dirs = getDirectories(pathFolder);
    return dirs;
};

let dirs = getDirectoriesRecursively(__dirname + '/src/theme/components')
  .map( pathFolder => pathFolder.replace(__dirname + '/src/theme/components/', ''))
  .concat(getDirectoriesRecursively(__dirname + '/src/pages'))
  .map( pathFolder => pathFolder.replace(__dirname + '/src/pages/', ''))

require("babel-polyfill");

module.exports = {
  entry: ["babel-polyfill", "./src/index.jsx"],
  output: {
    path: __dirname + "/public/bundle",
    filename: "./app.js"
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
    contentBase: "./public"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      modules: __dirname + "/node_modules"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'COMPONENTS': JSON.stringify(dirs)
      }
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: "app.css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /.js[x]?$/,
        loader: "babel-loader",
        exclude: [/node_modules/],
        query: {
          presets: ["es2015", "react"],
          plugins: [
            ["transform-object-rest-spread"],
            ["import", { libraryName: "antd", style: true }]
          ]
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars: theme
            }
          }
        ]
      },
      {
        test: /\.scss/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        loader: "file-loader"
      }
    ]
  }
};
