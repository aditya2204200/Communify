const express = require("express");
const { chats } = require("./data/data");

const app = express();

app.get('/', (req,res) => {
    res.send("API is Running");
})

// app.get('/api/chat/id', (req,res) => {
//     // console.log(req)
//     const singleChat = chats.find((c) => c._id === req.params.id);
//     res.send(singleChat);
// });

app.get("/api/chat" , (req,res) => {
    res.send(chats);
})

app.listen(8000,console.log("Server started on PORT 8000"));


