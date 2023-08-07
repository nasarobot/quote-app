require('dotenv').config()
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
const port = 5050;

mongoose.connect('mongodb+srv://saiavinash:mongo001@cluster0.ssx1q9c.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const quoteRouter = require('./routes/quote');
app.use('/quote', quoteRouter);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.listen(port, () => console.log('Server started on port '+ port));

app.use('/', (req,res) => {
  res.send("Hello World");
})

app.listen(port, () => console.log("Server started on port", port));