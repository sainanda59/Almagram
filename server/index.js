const express=require('express')
const app = express();
const fs = require("fs");
const http = require('http');
const cors = require('cors')
const {Server}=require('socket.io')

const server = http.createServer(app);

const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");

const credential = new AffindaCredential("bc10dc6ac0a51291eacbbb05c4da73d05eec7ece")
const client = new AffindaAPI(credential)

const readStream = fs.createReadStream("server/Sai-Soumyak-Nanda-2024-2.pdf");
let data;

// client.createResume({file: readStream}).then((result) => {
//     console.log("Returned data:");
//     console.dir(result)
//     data = result;
// }).catch((err) => {
//     console.log("An error occurred:");
//     console.error(err);
// });


client.createInvoice({url: "https://api.affinda.com/static/sample_invoices/"}).then((result) => {
    console.log("Returned data:");
    console.dir(result)
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