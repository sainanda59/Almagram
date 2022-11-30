const express=require('express')
const app = express();
const fs = require("fs");
const http = require('http');
const cors = require('cors')
const { Server } = require('socket.io')
const path=require("path")
const server = http.createServer(app);

const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");

const credential = new AffindaCredential("1bcd7c8ac5db7301e8c86cc2c24c9a8b610a699b")
const client = new AffindaAPI(credential)
const readStream = JSON.stringify(fs.createReadStream('./cv.pdf'));
let data;
client.createResume({file: readStream}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
    data=result;
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});

client.getResume(data).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});

server.listen('3001', () => {
    console.log('server running on 3001')
})