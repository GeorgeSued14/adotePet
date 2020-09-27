const express = require('express');
const { urlencoded, json } = require('express');

const app = express();
const PORT = 4000;

app.use(json())
app.use(urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendStatus(200).json({"message": 'Olá'});
})

module.exports = { app, PORT }