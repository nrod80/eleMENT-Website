const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res, next) => res.sendFile(path.resolve(__dirname, './index.html')));
app.use('/', express.static(__dirname));

app.listen(3000);
