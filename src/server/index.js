apiData = {};

const dotenv = require('dotenv');
dotenv.config();


var path = require('path')
const express = require('express')


// Require the Aylien npm package
var aylien = require("aylien_textapi");

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
var bodyParser = require('body-parser');
const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require('constants');
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('dist'))
app.use(express.urlencoded({ extended: true }))
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests

app.get('/test', function (req, res) {
    res.send(apiData);
})

app.post('/lang', apiRequest)


function apiRequest(req, res) {
    console.log(req.body.url)
    let dataRecieved = {};
    let url = req.body.url;
    console.log('url', url);
    textapi.language({
        'url': url,
    },
    function(error,response) {
        if(error === null){
            apiData = dataRecieved;
            dataRecieved.text = response.lang;
            Object.assign(apiData, dataRecieved);
            console.log('data:', apiData);
        }
        else {
            console.log(error);
        }
    })
    setTimeout(function() {
        console.log(apiData)
        res.send(apiData);

    }, 5000)
    
}
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})
