import React,{useEffect} from "react"
import {useHeading} from "../../../../hooks/index"
import TemplateBasicDetailsForm from "../../../../components/teacher/template/create/basicDetailsForm";
const CreateTemplatePage = () => {

    const {setHeading, setSubHeading} = useHeading();

    useEffect(()=> {
        setHeading("Create Template");
        setSubHeading("Create a new Template for your Assessments")
    },[])
    return (
        <div className=" w-full">
           <TemplateBasicDetailsForm />
        </div>
    )
}

export default CreateTemplatePage;