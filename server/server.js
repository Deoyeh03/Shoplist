require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const linkDb = require('./config/db');
const middleware = require('./middlewares/mid')

const app = express();
PORT = process.env.PORT;

middleware(app);


linkDb();

// Route
app.use('/api/product', require('./routes/product'));

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
});