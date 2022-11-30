const express=require('express')
const app = express();
const fs = require("fs");
const http = require('http');
const cors = require('cors')
const { Server } = require('socket.io')
const path=require("path")


const server = http.createServer(app);

const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");

const credential = new AffindaCredential("bc10dc6ac0a51291eacbbb05c4da73d05eec7ece")
const client = new AffindaAPI(credential)

const dirPath = path.join(__dirname, "/Sai-Soumyak-Nanda-2024-2.pdf")
// fs.mkdirSync(dirPath)

const readStream = fs.createReadStream(dirPath);
let data;
console.log(__dirname)

client.createInvoice({file: readStream}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
}).catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});

// client.createResume({file: readStream}).then((result) => {
//     console.log("Returned data:");
//     console.dir(result)
//     data = result;
// }).catch((err) => {
//     console.log("An error occurred:");
//     console.error(err);
// });


// client.createInvoice({url: "https://api.affinda.com/static/server/Sai-Soumyak-Nanda-2024-2.pdf"}).then((result) => {
//     console.log("Returned data:");
//     console.dir(result)
//     data = result;
// }).catch((err) => {
//     console.log("An error occurred:");
//     console.error(err);
// });

// client.getResume(data).then((result) => {
//     console.log("Returned data:");
//     console.dir(result)
// }).catch((err) => {
//     console.log("An error occurred:");
//     console.error(err);
// });



server.listen('3001', () => {
    console.log('server running on 3001')
})