const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: './js/[name].[hash].js'
  },
  performance: {
    hints: false
  },
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'public', 'index.html'),
      serveIndex: true,
      watch: true
    },
    client: {
      progress: true
    }
  },
  plugins: []
};
