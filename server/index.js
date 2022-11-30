const express=require('express')
const app = express();
const fs = require("fs");
const http = require('http');
const cors = require('cors')
const { Server } = require('socket.io')
const path = require("path")



const server = http.createServer(app);

const { AffindaCredential, AffindaAPI } = require("@affinda/affinda");

const credential = new AffindaCredential("bc10dc6ac0a51291eacbbb05c4da73d05eec7ece")
const client = new AffindaAPI(credential)
// const readStream = fs.createReadStream((__dirname + "/Sai-Soumyak-Nanda-2024-2.pdf").toString());
const readStream=fs.readFileSync("/Sai-Soumyak-Nanda-2024-2.pdf")


client.createResume({file: readStream}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});





server.listen('3001', () => {
    console.log('server running on 3001')
})