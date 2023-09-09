let express = require('express');
const res = require('express/lib/response');
let app = express();

console.log('Hello World');

app.get('/', (req, res) => {
    absoluteStaticPath = __dirname + '/public';
    app.use(express.static(absoluteStaticPath));
    });





























 module.exports = app;
