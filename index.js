const AWS = require("aws-sdk");
const s3 = new AWS.S3();

var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Get Success');
    res.end();
}).listen(process.env.PORT || 3000);

// store something
await s3.putObject({
    Body: JSON.stringify({key:"value"}),
    Bucket: "cyclic-wild-jade-centipede-tie-us-west-1",
    Key: "some_files/my_file.json",
}).promise()

// get it back
let my_file = await s3.getObject({
    Bucket: "cyclic-wild-jade-centipede-tie-us-west-1",
    Key: "some_files/my_file.json",
}).promise()

console.log(JSON.parse(my_file))
