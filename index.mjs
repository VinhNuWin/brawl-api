import express from 'express';
const app = express();
import brawlers from './brawlers.json' assert{ type: "json"};
import cors from 'cors';

app.use(cors());

app.use(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

app.get('/', (req, res) => {
    res.send(brawlers);
});

// app.get('/', (req, res) => {

// })


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));