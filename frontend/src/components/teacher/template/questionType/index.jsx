import { useDispatch } from "react-redux";
import AddQuestionType from "../../../../pages/teacher/templates/create/addQuestionType";
import { difficultyOptions, questionOptions } from "../../../../utils";
import { CustomInputs } from "../../../common/inputs/customInputs";
import { InputTypes } from "../../../common/inputs/customInputs/types";
import { templateSelector, updateQuestionTypeData } from "../../../../store/features/template/templateSlice";
import { useSelector } from "react-redux";

const QuestionType = ({index}) => {
    const dispatch = useDispatch();
    
    const handleChange = (key, value) => {
      dispatch(updateQuestionTypeData({index, key, value}))
    }

    
    const {questionTypes} = useSelector(templateSelector)
    
    const questionType = questionTypes[index];
    
    if(!questionType) return null;

    const questionTitle = questionOptions.find((option) => option.id === questionType.type)?.label ?? ""

    return (       
        <div className="flex flex-col border border-black p-4 rounded-md">
          <h2 className="text-lg border-b font-bold">{questionTitle} Settings</h2>
          
          <form className="mt-4 space-y-2 ">

          <div className=" flex gap-2">

            <CustomInputs inputTypes={InputTypes.TEXT} label={"Question Count"} placeholder="Number of Questions" onChange={(value) => handleChange("questionCount", value)} type="number" value={questionType.data.questionCount} min="0" />
            <CustomInputs inputTypes={InputTypes.TEXT} label={"Marks Per Question"} placeholder="E.g., 2, 3" onChange={(value)=> handleChange("marksPerQuestion", value)} type="number" value={questionType.data.marksPerQuestion} min="0"/>
            
          </div>
          <div>
            <CustomInputs inputTypes={InputTypes.DROPDOWN} options={difficultyOptions} label={"Select Difficulty Level"} placeholder={"Easy, Medium, Hard"} onChange={(value)=> {handleChange("difficultyLevel", value)}} value={questionType.data.difficultyLevel} />
            <CustomInputs inputTypes={InputTypes.MULTILINE} label={"Custom AI Prompt"} placeholder={"E.g,. Make sure Each question is unique & Different from other"} onChange={(value)=> { handleChange("customPrompt", value)}} value={questionType.data.customPrompt}/>
             </div>
          </form>
        </div>
)
}

export default QuestionType