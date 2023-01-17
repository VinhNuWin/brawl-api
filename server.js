const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = 8000;
const brawlers = require('./brawlers');

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/brawlers/:name', (req, res) => {
    const brawlerName = req.params.name
    res.json(brawlers[brawlerName])
});

app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is now running on ${PORT} good`)
})