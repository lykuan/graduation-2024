const express = require('express');
const bodyParser = require('body-parser');
const {Server} = require('socket.io');
const app = express();


app.use(bodyParser.json())



app.listen(process.env.PORT || 3000, () => {
    console.log("server is running...");
})
