const express = require("express");

const app = express()

app.get('/', (req,res) => {
    res.send("API is Running");
})

app.listen(8000,console.log("Server started on PORT 8000"));

