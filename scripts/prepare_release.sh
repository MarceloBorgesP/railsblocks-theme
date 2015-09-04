#!/bin/bash

set -x

[ -d dist/ ] && rm -rf dist/
[ ! -d dist ] && mkdir dist/
[ ! -d dist/css ] && mkdir dist/css/
[ ! -d dist/js ] && mkdir dist/js/
[ ! -d dist/fonts ] && mkdir dist/fonts/

gulp build:production
cp -pr public/fonts/* dist/fonts/
cp -pr public/javascripts/theme.min.js dist/js/
cp -pr public/stylesheets/theme.css dist/css/theme.min.css