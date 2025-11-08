#!/usr/bin/env sh

set -e
npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/emilyeg/module10.git master:gh-pages

cd -
