const mongoose = require("mongoose")

const questionOptionTemplateSchema = new mongoose.Schema({
    includeHints : {
        type : Boolean,
        default : false,
    },
    includeExplanation : {
        type : Boolean,
        default : false,
    },
    enableNegativeMarking : {
        type : Boolean,
        default : false,
    },
    shuffleOptions : {
        type : Boolean,
        default : false,
    }
},
{
    _id: false // This means that we are not going to store the id here since this is going to be accessible through the template data only
})


module.exports = {questionOptionTemplateSchema}