const express = require('express');
const socketIO = require('socket.io');
const app = express();
const __PORT = 8001;
app.get('/', (req, res) => {
    res.send('Working---');
});
const server = app.listen(__PORT);
console.log('\n\n=======\nExpress App is Listening to port', __PORT, "\n=======");
const socket = socketIO(server);
socket.on('connection', (con) => {
    console.log('A new Connection Made');
});