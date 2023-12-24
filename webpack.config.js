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
      template: './src/index.html',
      chunks: ['js/index', 'js/controller', 'js/view', 'js/model']
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
    'js/index': ['@babel/polyfill', './src/js/index.js'],
    'js/controller': ['@babel/polyfill', './src/js/controller.js'],
    'js/view': ['@babel/polyfill', './src/js/view.js'],
    'js/model': ['@babel/polyfill', './src/js/model.js'],
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
