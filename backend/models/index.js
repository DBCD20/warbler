const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = Promise;
MONGODB = process.env.MONGODB_URI || "mongodb://localhost/warbler";

mongoose.connect(MONGODB, {
    keepAlive:      true,
    useNewUrlParser: true
});

module.exports.User = require('./user');
module.exports.Message = require('./message');