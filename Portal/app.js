const express=require('express')
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
app=express()
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: false }));
require('dotenv').config();
console.log(process.env.PORT);
const PORT=process.env.PORT || 4000;
// Add middleware for parsing JSON data
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('assets'));
app.use('/assets/uploads', express.static('assets/uploads'));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));
app.use('/',require('./routes/index'));
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
  