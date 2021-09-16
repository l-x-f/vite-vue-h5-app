#!/bin/sh

set -e

git  add .
npm run  commit
git pull
git push
