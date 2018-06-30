const express = require('express');
const app = express();

app.get("/", (req, res) => {
    console.log(new Date() + ": called /");
    res.setHeader("Access-Control-Allow-Origin", "*");
    const retval = String(new Date());
    return setTimeout(() => res.send(retval), 1000);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
