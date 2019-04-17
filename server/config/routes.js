const Controller = require('./../controllers/controllers');
const path = require('path');
module.exports = (app)=>{
    app.get('/', Controller.index);
    app.get('/concerts', Controller.concerts);
    
}