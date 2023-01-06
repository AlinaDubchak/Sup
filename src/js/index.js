const express = require('express');

const app = express();
const port = 8000;

const connection = require('./data_base');

app.use(express.json());

app.use('/api', require('./route'));

connection.connect(() => app.listen(port, () => console.log(`Server is running on port ${port}`)));