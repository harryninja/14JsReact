const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Homepage man')
})

app.get('/services', (req, res) => {
    res.send('Services')
})

app.listen(5000, () => {
    console.log('listening on port')
})