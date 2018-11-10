const mongoose = require('./db');

const schema = new mongoose.Schema({
    field : String
});

module.exports = mongoose.model('Model', schema);
