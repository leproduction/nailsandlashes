const webpack = require('webpack');

module.exports = {
  // other webpack configuration...

  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),


       // or require.resolve('browserify-fs')
      // Add other necessary polyfills for Node.js core modules
    }
  },
};