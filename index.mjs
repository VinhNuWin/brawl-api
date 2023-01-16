import express from 'express';
const app = express();
import brawlers from './brawlers.json' assert{ type: "json"};
import cors from 'cors';
import bodyParser from 'body-parser';

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        if(req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET' )
            return res.status(200).json({});
        }
});

app.get('/', (req, res) => {
    res.send(brawlers);
});

// app.get('/', (req, res) => {

// })


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));