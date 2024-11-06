const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/TaskToDo').on('open' ,()=>{
    console.log("MongoDb Connected");
}).on('error',()=>{
    console.log("MongoDb Connection Error");
});
module.exports = connection;