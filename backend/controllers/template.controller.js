const {Template} = require("../models/index.model")

const getAllTemplates = async(req, res, next) => {
    try{
        const Templates = await Template.find();

        return res.status(200).json({
            success : true,
            Templates
        })
    }
    catch(e)
    {
        const error = new Error("Failed To Fetch the templates",{
            cause : e // This will display the exact reason for the error
        });
        return next(error) 
    }
}

const getTemplateById = async(req, res)=> {
    try{

        return res.status(200).json({
            success : true,
            message : "Data fetched SuccessFully!",
            data
        })
    }catch(error){
        return res.status(500).json({
            success : false,
            message : "Sorry Failed to Get the user data due to server error. Kindly Try again later",
            error
        })
    }
}

const deleteTemplateById = async(req, res) => {
    try{

    }catch(error){
        return res.status(500).json({
            success : false,
            message : "Sorry Failed to Get the user data due to server error. Kindly Try again later",
            error
        })
    }
}

module.exports = {getAllTemplates,getTemplateById, deleteTemplateById}