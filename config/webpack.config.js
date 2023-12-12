const merge = require('webpack-merge').default;
const commonConfig = require('./webpack.common');
const devConfig = require('./webpack.development');
const proConfig = require('./webpack.production');

module.exports = () => {
  if (process.env.NODE_ENV === 'development') {
    return merge(commonConfig, devConfig, { mode: 'development' });
  }
  return merge(commonConfig, proConfig, { mode: 'production' });
};
