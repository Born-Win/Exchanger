const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const EslintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV == 'dev';

const configPlugins = () => {
  const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: './css/[name][contenthash].css' }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/home/index.html',
      chunks: ['js/home/index', 'js/home/controller', 'js/home/view', 'js/home/model']
    }),
    new HtmlWebpackPlugin({
      filename: './transactions/index.html',
      template: './src/transactions/index.html',
      chunks: ['js/transactions/index', 'js/transactions/controller', 'js/transactions/view', 'js/transactions/model']
    }),
  ];

//   if (isDev) {
//     plugins.push(
//       new EslintWebpackPlugin({
//         overrideConfigFile: path.resolve(__dirname, 'public/.eslintrc'),
//         files: '**/*.ts'
//       })
//     );
//   }

  return plugins;
};

module.exports = {
  context: path.resolve(__dirname, 'public'),
  mode: 'development',
  entry: {
    'js/home/index': ['@babel/polyfill', './src/js/home/index.js'],
    'js/home/controller': ['@babel/polyfill', './src/js/home/controller.js'],
    'js/home/view': ['@babel/polyfill', './src/js/home/view.js'],
    'js/home/model': ['@babel/polyfill', './src/js/home/model.js'],
    'js/transactions/index': ['@babel/polyfill', './src/js/transactions/index.js'],
    'js/transactions/controller': ['@babel/polyfill', './src/js/transactions/controller.js'],
    'js/transactions/view': ['@babel/polyfill', './src/js/transactions/view.js'],
    'js/transactions/model': ['@babel/polyfill', './src/js/transactions/model.js'],
  },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'public/dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.css', '.html']
  },
  plugins: configPlugins(),
  // devtool: isDev ? 'source-map' : '',
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  devServer: {
    port: 4200
  }
};
