const {Template} = require("../models/index.model")

const getAllTemplates = async(req, res, next) => {
    try{
        const templates = await Template.find();

        return res.status(200).json({
            success : true,
            data : templates
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

const getTemplateById = async(req, res, next)=> {
    try{
        const {id} = req.params;
        if(!id)
        {
            const error = new Error("No id found template id is required", {cause: new Error("Template id is required")})
            return next(error)
        }
        const template = await Template.findById(id )
        return res.status(200).json({
            success : true,
            message : "Data of the user fetched SuccessFully!",
            data : template
        })
    }catch(e)
    {
        const error = new Error("Failed To Fetch the template by id",{
            cause : e // This will display the exact reason for the error
        });
        return next(error) 
    }
}

const deleteTemplateById = async(req, res, next) => {
    const {id} = req.params;
    try{
        if(!id)
        {
            const error = new Error("No id found template id is required", {cause: new Error("Template id is required")})
            return next(error)
        }
        const template = await Template.findByIdAndDelete(id )
        return res.status(200).json({
            success : true,
            message : "Data of the user fetched SuccessFully!",
            data : template
        })
    }catch(e)
    {
        const error = new Error(`Failed To delete the templates with id : ${id}`,{
            cause : e // This will display the exact reason for the error
        });
        return next(error) 
    }
}

module.exports = {getAllTemplates,getTemplateById, deleteTemplateById}