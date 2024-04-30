'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['./src/js/bootstrap-theme.js',
    './src/scss/bootstrap-theme.scss'],
  output: {
    filename: 'js/bootstrap-theme.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  /*
  optimization: {
    minimize: false // to ensure the output isn't minfied
  },
  */
  devServer: {
    static: path.resolve(__dirname, './'), // changed the directory where the pages are served from
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "/index.html"),
      template: './src/index.html',
      minify: {
        collapseWhitespace: false // to ensure that the exported html file is not minified
      }
    }),

    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "/demo.html"), //updated output for the html
      template: './src/demo.html',
      minify: {
        collapseWhitespace: false
      }
    }),

    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "/introduction.html"),
      template: './src/introduction.html',
      minify: {
        collapseWhitespace: false
      }
    }),
    new miniCssExtractPlugin({
      filename: 'css/bootstrap-theme.min.css',
    }),
    //Copying the scss files to dist
    new CopyPlugin({
      patterns: [
        { from: "./src/scss", to: "scss" }
      ],
    })
  ],
  module: {
    rules: [
      // move fonts into local directory
      {
        test: /\.(otf|ttf|eot|woff|woff2|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/bc-sans/[name][ext][query]',
        }
      },

      {
        test: /\.(scss)$/,
        use: [
          {
            // Extracts CSS for each JS file that includes CSS
            loader: miniCssExtractPlugin.loader
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}
