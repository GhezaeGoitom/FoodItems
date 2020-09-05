const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const postSchema = mongoose.Schema({
title:{
    type: String,
    required:true
},
hotel:{
    type: String,
    required: true
},
price:{
    type: Currency,
    required: true
},
imgUrl:{
    type: String,
    required: true
}
});


module.exports = mongoose.model('Posts',postSchema);