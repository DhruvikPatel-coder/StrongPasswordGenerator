const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
const path = require('path');
const generator = require('generate-password');
const app = express();

app.use(cors())
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Put all API endpoints under '/api'
app.post('/passwords', (req, res) => {
    let body = req.body.state
    // Generate some passwords
    var password = generator.generate({
        length: body['length'],
        numbers: body['numbers'],
        uppercase: body['uppercase'],
        lowercase: body['lowercase'],
        symbols: body['symbols'],
        excludeSimilarCharacters: body['excludeSimilarCharacters'],
        exclude: body['exclude']
    });
    // Return them as json
    return res.json({ password: password });
});
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Password generator listening on ${port}`);
