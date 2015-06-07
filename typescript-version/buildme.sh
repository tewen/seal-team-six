#!/usr/bin/env bash

npm install
tsd update -s -o
tsc --sourcemap --out scripts/build.js scripts/_all.ts