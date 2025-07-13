const {createTemplate, getAllTemplates, getTemplateById, deleteTemplateById} = require("../controllers/index.controller")

const express = require("express");

const templateRouter = express.Router();

templateRouter.get("/", getAllTemplates);
templateRouter.post("/", createTemplate)
templateRouter.get("/:id", getTemplateById);
templateRouter.delete("/:id", deleteTemplateById);

module.exports = templateRouter;
// export default 