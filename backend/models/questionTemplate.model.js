import {questionOptionTemplateSchema, questionDifficultyLevelEnum} from "." // This will read the file from the index.js
import {questionTypesEnum, questionDifficultyLevelEnum} from "../types"
const mongoose = require("mongoose")

export const questionTemplateSchema = new mongoose.Schema({
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
        type : string,
        enum : Object.values(questionDifficultyLevelEnum),
        required : true,
    },
    prompt : {
        type : String,
    },
    option : {
        type : questionOptionTemplateSchema,
        required : true
    }
})

// export const Question = mongoose.model("Question", questionTemplateSchema);