const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = (env) => {
  const isProduction = env === 'production';
  const envVariable = dotenv.config().parsed;
  // const envVariable = dotenv.load().parsed;
  const envKeys = Object.keys(envVariable).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envVariable[next]);
    return prev;
  }, {});

  return {
    entry: './src/index.jsx',
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: '/node_modules/',
          use: {
            loader: 'babel-loader',
          }
        }, {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader?name=images/[name].[ext]',
            {
              loader: 'image-webpack-loader',
              options: {
                disable: true,
              },
            },
          ],
        }
      ]
    },
    plugins: [
      new HtmlwebpackPlugin({
        template: './src/index.html'
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      historyApiFallback: true
    },
    resolve: {
      extensions: ['.jsx', '.js', '.png', '.svg']
    }
  };
};
