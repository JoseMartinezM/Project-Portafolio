const express = require('express');
const bodyParser = require('body-parser');
const toolsRouter = require('./Tools.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/Tools', toolsRouter);
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

module.exports = app;