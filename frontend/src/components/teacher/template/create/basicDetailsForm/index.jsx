import { CustomInputs } from "../../../../../components/common/inputs/customInputs";
import {LabelPositionTypes, InputTypes} from "../../../../../components/common/inputs/customInputs/types/index"

import {useSelector, useDispatch} from "react-redux";
import {templateSelector, setTemplateKey} from "../../../../../store/features/template/templateSlice"

const TemplateBasicDetailsForm = () => {
    const {title, description, subject, gradeLevel} = useSelector(templateSelector)

    const dispatch = useDispatch();

    const handleChange = (key, value) => {
        dispatch(setTemplateKey({key, value}));
    }
    return (
         <div className="flex flex-col border w-full border-black p-4 rounded-md">
            <h1 className="text-lg font-bold border-b border-black pb-2">Basic Details</h1>
            <form className="flex flex-col gap-2">

            <CustomInputs inputTypes={InputTypes.TEXT} value={title} id={"title"} label={"Title"} placeholder="Please Enter the title here" onChange={(value)=> handleChange("title", value)} />
            <CustomInputs inputTypes={InputTypes.MULTILINE} value={description} id={"description"} label={"Description"} placeholder="Please Enter the Description here" onChange={(value)=> handleChange("description", value)} />
            
            <div className="flex gap-4 w-full">
            <CustomInputs inputTypes={InputTypes.TEXT} value={subject} id={"subject"} labelPosition={LabelPositionTypes.TOP} label={"Subject"} placeholder="E.g., Maths, English , Hindi..." onChange={(value)=> handleChange("subject", value)} />
            <CustomInputs inputTypes={InputTypes.TEXT} value={gradeLevel} id={"grade"} label={"Grade Level"} labelPosition={LabelPositionTypes.TOP} placeholder="E.g., 9, 10th, 12 or Collage 1st year, etc..." onChange={(value)=> handleChange("gradeLevel", value)}/>
            </div>
            </form>

            </div>
    )
}

export default TemplateBasicDetailsForm