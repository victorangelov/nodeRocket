const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'legal essa merda World'});
});

app.listen(3333, () => {
    console.log(' 🚀 Back-end iniciado!')
});