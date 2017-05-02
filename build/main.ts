import * as process from "build-utils/process";
import * as cli from "build-utils/cli";

cli.command("dev", dev);
cli.run();

function dev() {
    return Promise.resolve()
        .then(runServer)
        .then(runBrowser);
}

function runServer() {
    process.exec("node_modules/.bin/http-server");
}

function runBrowser() {
    process.open("http://localhost:8080/index.html");
}
