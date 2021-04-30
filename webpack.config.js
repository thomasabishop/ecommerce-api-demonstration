/*
 * This is a minimal Webpack config file.
 * It compiles code in the /src dir to the /dist dir.
 * For this project we do not need a production build since the project only exists for the purposes of demonstration, however I have included a build /dir, just for ensuring browser compatibility when writing the custom Javascript
 * In order to view the output we only need a development server. This runs when you issue `npm start`. It serves the Webpack bundle (configured below) from memory.
 * This serves a basic no-frills frontend set-up: HTML, CSS, and JavaScript, along with importing Bootstrap 4 as this is the framework you will be using
 * It includes source mapping so that you can analyse the runtime code using the browser's development tools
 * If you want to generate a production build, just run `npm run build`
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // Specify entrypoint: where Webpack will compile from
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  // Specify output: where Webpack will compile to
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    // Compile HTML from /src to /dist
    new HtmlWebpackPlugin({
      title: 'Eschmann frontend',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    //  Purge the /dist dir before every new build
    new CleanWebpackPlugin(),
    // Add 'update on save' when development server is running
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      //  Specify JS compilation. We are using Babel as the loader to ensure I can use useful ES6 syntax such as ES modules in development. But that's just for my tooling, everything else will be set to ES5 JS so that it can be copy and pasted into the Umbraco context without worrying about compatibility accross browsers.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Inject custom CSS (from /src/styles.css) into the DOM
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // Config for development server. Allows us to serve the Webpack bundle from memory when you issue `npm start`
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
};
