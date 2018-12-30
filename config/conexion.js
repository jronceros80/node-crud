let mongoose = require('mongoose');

//BD en la nube
mongoose.connect('mongodb://mito:Sudamerica1@ds145474.mlab.com:45474/mitonodejscrud', { useMongoClient: true }); //mongodb://localhost:27017/crud

// BD en local
//mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true }); //mongodb://localhost:27017/crud

module.exports = mongoose;