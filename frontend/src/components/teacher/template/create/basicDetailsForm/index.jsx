import { CustomInputs } from "../../../../../components/common/inputs/customInputs";
import {LabelPositionTypes, InputTypes} from "../../../../../components/common/inputs/customInputs/types/index"
// import {InputTypes} from "../../../../../"

const TemplateBasicDetailsForm = () => {
    return (
         <div className="flex flex-col border w-full border-black p-4 rounded-md">
            <h1 className="text-lg font-bold border-b border-black pb-2">Basic Details</h1>
            <form className="flex flex-col gap-2">

            <CustomInputs inputTypes={InputTypes.TEXT} id={"title"} label={"Title"} placeholder="Please Enter the title here" />
            <CustomInputs inputTypes={InputTypes.MULTILINE} id={"description"} label={"Description"} placeholder="Please Enter the Description here" />
            
            <div className="flex gap-4 w-full">
            <CustomInputs inputTypes={InputTypes.TEXT} id={"subject"} labelPosition={LabelPositionTypes.TOP} label={"Subject"} placeholder="E.g., Maths, English , Hindi..." />
            <CustomInputs inputTypes={InputTypes.TEXT} id={"grade"} label={"Grade Level"} labelPosition={LabelPositionTypes.TOP} placeholder="E.g., 9, 10th, 12 or Collage 1st year, etc..." />
            </div>
            </form>

            </div>
    )
}

export default TemplateBasicDetailsForm