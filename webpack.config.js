/* eslint-disable */
const path = require('path');

const externalAPI = 'http://10.0.1.28:10080/';
const extInternalAPI = 'http://10.0.1.28:10180/';
const internalAPI = 'http://10.0.1.28:9000/';
const moneyFlowAPI = 'http://10.0.1.28:9200/';
const notificationsAPI = 'http://10.0.1.28:10081/';

module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    }]
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    stats: 'normal', // none (or false), errors-only, minimal, normal (or true) and verbose
    proxy: {
      '/notif': {
        target: notificationsAPI,
        pathRewrite: {'^/notif': ''},
        secure: false
      },
      '/service/*': {
        target: internalAPI,
        secure: false
      },
      '/api/v1/users/*': {
        target: externalAPI,
        secure: false
      },
      '/internal/banktransfer/*': {
        target: extInternalAPI,
        secure: false
      },
      '/internal/contract/*': {
        target: extInternalAPI,
        secure: false
      },
      '/internal/attachments/*': {
        target: extInternalAPI,
        secure: false
      },
      '/internal/account/*': {
        target: extInternalAPI,
        secure: false
      },
      '/api/v1/transactions/*': {
        target: externalAPI,
        secure: false
      },
      '/api/v1/invoices/search/*': {
        target: internalAPI,
        secure: false
      },
      '/api/v1/invoices/*': {
        target: externalAPI,
        secure: false
      },
      '/api/v1/automation/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/ccnotification/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/collection/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/contract/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/order/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/moneyhouse/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/application': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/simulation/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/exServices/*': {
        target: internalAPI,
        secure: false
      },
      '/internal/*': {
        target: extInternalAPI,
        secure: false
      }
    }
  }
};



// This will make the redux-simpler-router module resolve to the
// latest src instead of using it from npm. Remove this if running
// outside of the source.
var src = path.join(__dirname, '..', '..', 'src')
var fs = require('fs')
if (fs.existsSync(src)) {
  // Use the latest src
  module.exports.resolve = { alias: { 'react-router-redux': src } }
  module.exports.module.loaders.push({
    test: /\.js$/,
    loaders: ['babel'],
    include: src
  });
}
