### GLOBAL INSTALLATIONS

npm install -g typescript
npm install -g tsd

### INTRODUCING TSD

tsd update -s -o

### RUNNING THE COMPILATION

tsc --sourcemap --out scripts/build.js scripts/_all.ts

### KEEP IT SIMPLE

You can do everything you need by running the buildme.sh script in the typescript directory. Use a simple server like httpster or node-static to view the page.
