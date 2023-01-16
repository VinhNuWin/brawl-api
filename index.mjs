import express from 'express';
const app = express();
import brawlers from './brawlers.json' assert{ type: "json"};

app.get('/', (req, res) => {
    res.send(brawlers);
});

// app.get('/', (req, res) => {

// })


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));