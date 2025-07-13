const {questionTemplateSchema}  = require("./questionTemplate.model")

const mongoose = require("mongoose")

const templateSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String, 
        required : true,
    },
    subject : {
        type : String,
        required : true,
    },
    gradeLevel : {
        type : String,
        required : true,
    },
    question : [{
        type : questionTemplateSchema,
        required : true,
    }],
    // By default we do not directly delete the data from the database Rather we keep the data 
    // But according to the EU rules & ISO the maximum amount of time the companies can keep the data is 30 days 
    // So they basically do that whenever we delete the data we set the deleted as Date.now();
    // Then there are CRON or clean up jobs(preferred first name) which as basically same as polling 
    // where the CRON runs at certain time like : every 1 min , or everyday at 12 am or every friday at 2 am and so on 
    // and then it checks the each data from the database where the deleted date exceeds 30 days then it automatically deletes it from the db
    // Currently we are not implementing this but this one is for future use
    deletedAt : {
        type : Date,
        default : null,
    }
}, {
    timestamps : true // This will allow us to store the time stamp in order to track
})

/* == Making the indexing in any element is extremely easy 
    templateSchema.index({title : 1, subject : 1})
    * Here we have created indexing in two columns title & subject individually
*/

const Template = mongoose.model("Template", templateSchema)

module.exports = {Template}