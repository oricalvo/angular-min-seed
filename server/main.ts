import * as express from "express";

const app = express();

app.get("*", function(req, res) {
    res.write("Yo2");
    res.end();
});

app.listen(3000, function () {
    console.log("Server is running");
});
