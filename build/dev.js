const shelljs = require("shelljs");
const path = require("path");

const tscFilePath = path.join(__dirname, "../node_modules/.bin/tsc");
if(shelljs.exec(tscFilePath).code != 0) {
    console.error("Typscript compilation failed");
    return;
}

const sass = path.join(__dirname, "../node_modules/.bin/node-sass.cmd --recursive ./app --output ./app");
if(shelljs.exec(sass).code != 0) {
    console.error("SCSS compilation failed");
    return;
}

const sjs = path.join(__dirname, "../node_modules/.bin/sjs");
shelljs.exec(sjs);
