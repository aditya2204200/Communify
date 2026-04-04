const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config()
app.get('/', (req,res) => {
    res.send("API is Running successfuly");
})

// app.get('/api/chat/id', (req,res) => {
//     // console.log(req)
//     const singleChat = chats.find((c) => c._id === req.params.id);
//     res.send(singleChat);
// });

app.get("/api/chat" , (req,res) => {
    res.send(chats);
})

const PORT = process.env.PORT || 7000

app.listen(7000,console.log(`Server started on PORT ${PORT}`));


