const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const app = express();
const port = process.env.port || 3002;
const cors = require('cors');

//sequelize
require('./models/index');
//dotenv
require('dotenv').config();

app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

const router = require("./config/routes");
app.use('/api/v1/public/post/', express.static('public/post'))
app.use('/api/v1', router);

// routes(app)

app.listen(port)
console.log(`API server started on: ${port}`);
