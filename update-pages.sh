#!/usr/bin/env bash

########################################################
# This bash script updates gh-pages branch
# Usage:
# ./update-script.sh
# Ensure that you have write permissions to your origin remote
########################################################

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BRANCH=gh-pages
URL=$(git config --get remote.origin.url)

${DIR}/node_modules/.bin/gulp build
cd ${DIR}/web

rm -rf .git
git init
git remote add origin ${URL}
git add .
git commit -m "GitHub Pages"
git push origin master:gh-pages --force
rm  -rf .git
