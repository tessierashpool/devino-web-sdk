const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  const BASE_URL = env && env.BASE_URL ? env.BASE_URL : 'http://kube.devinotest.local:31404';
  const IS_DEV = env && env.dev;

  const config = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
      filename: 'devino-web-sdk.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'Devino',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          include: path.resolve(__dirname, 'src'),
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.BASE_URL': JSON.stringify(BASE_URL),
      }),
      new CopyPlugin({
        patterns: [{ from: 'src/_samples/', to: '' }],
        options: {
          concurrency: 100,
        },
      }),
    ],
  };

  if (IS_DEV) {
    config.devtool = 'source-map';
  }

  return config;
};
