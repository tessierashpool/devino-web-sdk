const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  const config = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: 'devino-web-sdk.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'Devino',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
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
    plugins: [
      new webpack.DefinePlugin({
        'process.env.BASE_URL':
          env && env.BASE_URL ? JSON.stringify(env.BASE_URL) : JSON.stringify('http://localhost:3000'),
      }),
    ],
  };

  if (env && env.dev) {
    config.devtool = 'inline-source-map';
  }

  return config;
};
