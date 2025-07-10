import {questionTemplateSchema} from "."

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
    question : {
        type : questionTemplateSchema,
        required : true,
    }
}, {
    timestamps : true // This will allow us to store the time stamp in order to track
})

/* == Making the indexing in any element is extremely easy 
    templateSchema.index({title : 1, subject : 1})
    * Here we have created indexing in two columns title & subject individually
*/

export const Template = mongoose.model("Template", templateSchema)