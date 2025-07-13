const {Template, QuestionTemplate, QuestionOptionTemplate} = require("../models/index.model")


const createTemplate = async (req, res, next) =>
{
    try{
        const {
            title, 
            description, 
            subject, 
            gradeLevel,
            questionTemplates 
        } = req.body;

        const template = new Template({
            title, description, subject, gradeLevel
        })
        
        const questionTemplate = questionTemplates.map((questionTemplateItem) => 
            new QuestionTemplate({...questionTemplateItem,
                options: {
            includeHints: questionTemplateItem.options.includeHints,
            includeExplanation: questionTemplateItem.options.includeExplanation,
            enableNegativeMarking: questionTemplateItem.options.enableNegativeMarking,
            shuffleOptions: questionTemplateItem.options.shuffleOptions
        }
            }))

        // Add the questions to the template
        template.question = questionTemplate;

        const savedTemplates = await template.save();

        

        // Status code 201 means created
        return res.status(201).json({
            data : savedTemplates
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
        const template = await Template.findByIdAndDelete(id)
        return res.status(200).json({
            success : true,
            message : "Data of the user Deleted SuccessFully!",
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

module.exports = {createTemplate, getAllTemplates,getTemplateById, deleteTemplateById}