var PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);
app.listen(PORT, ()=>{
    console.log("Listen on 8080")
})