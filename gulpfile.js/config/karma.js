var config = require('./')
var karmaWebpack = require('karma-webpack')
var webpackConfig = require('./webpack')('test')

var files = config.sourceDirectory + '/javascripts/**/__tests__/*'

var karmaConfig = {
  frameworks: ['mocha', 'sinon-chai'],
  files: [  files ],
  preprocessors: {},
  webpack: webpackConfig,
  singleRun: process.env.TRAVIS === 'true',
  reporters: ['nyan'],
  browsers: [(process.env.TRAVIS === 'true'? 'Firefox' : 'Chrome')]
}

karmaConfig.preprocessors[files] = ['webpack']

module.exports = karmaConfig
