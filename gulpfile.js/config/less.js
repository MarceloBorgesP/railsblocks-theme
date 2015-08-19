var config = require('./')

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  src: config.sourceAssets + "/stylesheets/global.less",
  dest: config.publicAssets + '/stylesheets',
  settings: {
    plugins: []
  }
}
