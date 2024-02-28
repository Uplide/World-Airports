const express = require('express');
const geolib = require('geolib');

const app = express();
const port = 3000;

const airports = require('./airports.json')
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/airports', (req, res) => {
    res.json(airports);
});
app.listen(port, () => {
    console.log(`App Is Running On http://localhost:${port}`);
});