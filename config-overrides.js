/*
Source: 
  - https://www.alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5
  - https://stackoverflow.com/a/55298684
*/

const webpack = require('webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config) { 
    const fallback = config.resolve.fallback || {}; 
    Object.assign(fallback, { 
      "crypto": require.resolve("crypto-browserify"), 
      "stream": require.resolve("stream-browserify"), 
      "assert": require.resolve("assert"), 
      "http": require.resolve("stream-http"), 
      "https": require.resolve("https-browserify"), 
      "os": require.resolve("os-browserify"), 
      "url": require.resolve("url") 
      }) 
   config.resolve.fallback = fallback;
   config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));
   config.plugins = (config.plugins || []).concat([ 
     new webpack.ProvidePlugin({ 
      process: 'process/browser', 
      Buffer: ['buffer', 'Buffer'] 
    }) 
   ]) 
   return config; }