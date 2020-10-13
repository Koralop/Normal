const { Schema,model} = require('mongoose');

const guild = Schema({

    id: String,

    prefix: {
        type: String,
        default: 'n!'
    }

});

module.exports = model('Prefix', guild)