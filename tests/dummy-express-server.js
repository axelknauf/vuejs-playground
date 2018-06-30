const express = require('express');
const app = express();

app.get("/", (req, res) => {
    console.log(new Date() + ": called /");
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.send(String(new Date()));
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
