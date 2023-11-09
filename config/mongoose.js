const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://revanthr227:tcdqWqaUnDQrB2FD@cluster0.sgljwdw.mongodb.net/?retryWrites=true&w=majority');

const db =  mongoose.connection;

db.on('error',console.log.bind(console,"Error connecting the mongodb"));

db.once('open',function(){
    console.log('connected to database: Mongodb');
})

module.exports =db;