const shelljs = require("shelljs");
const path = require("path");

const tscFilePath = path.join(__dirname, "../node_modules/.bin/tsc");
shelljs.exec(tscFilePath);

const sass = path.join(__dirname, "../node_modules/.bin/node-sass.cmd --recursive ./app --output ./app");
shelljs.exec(sass);

const sjs = path.join(__dirname, "../node_modules/.bin/sjs");
shelljs.exec(sjs);
