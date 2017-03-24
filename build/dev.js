const buProcess = require("build-utils/process");
const path = require("path");

Promise.resolve()
    .then(compileTS)
    .then(compileSASS)
    .then(runServerAndBrowser);

function compileTS() {
    return buProcess.exec(path.normalize("node_modules/.bin/tsc"));
}

function compileSASS() {
    return buProcess.exec(path.normalize("node_modules/.bin/node-sass") + " --recursive ./app --output ./app");
}

function runServerAndBrowser() {
    return buProcess.exec(path.normalize("node_modules/.bin/nopack"));
}
