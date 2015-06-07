### INTRODUCING TSD

tsd install lodash --save
tsd install jquery --save
tsd install angular --save

### RUNNING THE COMPILATION

tsc --sourcemap --out scripts/build.js scripts/_all.ts
