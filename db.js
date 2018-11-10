const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/expressapi', {
    useNewUrlParser : true
});

module.exports = mongoose;