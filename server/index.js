const express=require('express')
const app = express();
const http = require('http');
const cors = require('cors')
const {Server}=require('socket.io')

const server = http.createServer(app);


server.listen('3001', () => {
    console.log('server running on 3001')
})