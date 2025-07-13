const {questionOptionTemplateSchema} = require("./questionOptionTemplate.model") 

const {questionTypesEnum, questionDifficultyLevelEnum} = require("../types")
const mongoose = require("mongoose")

const questionTemplateSchema = new mongoose.Schema({
    type : {
        type : String,
        enum : Object.values(questionTypesEnum), // Here we can only choose the enums only we do not have any other thing to choose
        required : true,
    },
    questionCount : {
        type : Number,
        required : true,
        min : 1,
    },
    marksPerQuestion : {
        type : Number,
        required : true,
        min : 0 // Any question can only be to test the user knowledge it cannot be the part of the test
    },
    difficultyLevel : {
        type : String,
        enum : Object.values(questionDifficultyLevelEnum),
        required : true,
    },
    prompt : {
        type : String,
    },
    options : {
        type : questionOptionTemplateSchema,
        required : true
    }
})
const QuestionTemplate = mongoose.model("QuestionTemplateSchema", questionTemplateSchema);

module.exports = {QuestionTemplate, questionTemplateSchema}