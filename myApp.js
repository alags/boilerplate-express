let express = require('express');
const res = require('express/lib/response');
let app = express();

app.get('/', (req, res) => {
    absolutePath = __dirname;
    app.use('/public/', express.static(absolutePath + '/public'));
    res.sendFile(absolutePath + '/views/index.html');
});





























 module.exports = app;
