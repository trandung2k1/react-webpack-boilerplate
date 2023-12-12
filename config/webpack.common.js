const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx')
  },
  output: {
    // publicPath: "/",
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node-modules/'
      },
      {
        // Images
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      },
      {
        // CSS, PostCSS, and Sass
        test: /\.(scss|css)$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(less|css)$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'React Webpack TypeScript',
      template: path.resolve(__dirname, '../public/index.html'), //html配置路径
      filename: 'index.html'
    }),
    new friendlyErrorsWebpackPlugin(),
    // [
    //   "transform-runtime",
    //   {
    //     helpers: false, // Indicates whether inline babel helper is enabled or not
    //     polyfill: false, // Indicates whether to convert built-in things (Promises, Sets, Maps), etc. into non-global pollution or not
    //     regenerator: true, // Should generator functionality be enabled and convert it to use the generator runtime again to avoid polluting the global domain?
    //     moduleName: "babel-runtime", // Call the backend to set the module name/path
    //   },
    // ],
    new MiniCssExtractPlugin({
      filename: './style/[name].[hash].css',
      chunkFilename: './style/chunk.[name].[hash].css'
    })
  ],
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': require('path').resolve(__dirname, '../src'),
      '@style': require('path').resolve(__dirname, '../style')
    }
  }
}
