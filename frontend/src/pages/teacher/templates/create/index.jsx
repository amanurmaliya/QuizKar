import React, { useEffect, useState } from "react";
import { useHeading } from "../../../../hooks/index";
import TemplateBasicDetailsForm from "../../../../components/teacher/template/create/basicDetailsForm";
import CustomDropDown from "../../../../components/common/customeDropDown";
import CustomDropDownInput from "../../../../components/common/inputs/customDropDownInput";
import { InputTypes } from "../../../../components/common/inputs/customInputs/types";
import { PlusIcon } from "lucide-react";
import {questionOptions} from "../../../../utils"

const CreateTemplatePage = () => {
  const { setHeading, setSubHeading } = useHeading();

  useEffect(() => {
    setHeading("Create Template");
    setSubHeading("Create a new Template for your Assessments");
  }, []);

  const [questionType, setQuestionType] = useState(null)
  return (
    <div className=" w-full">
      <TemplateBasicDetailsForm />
      <hr className="my-4" />
      <CustomDropDownInput
        inputType={InputTypes.DROPDOWN}
        label={
          <div className="flex items-center">
            <PlusIcon size={16} />
            {questionType ? questionOptions.find((question)=> question.id===questionType).label : "Add Question Type"}
          </div>
        }
      value={questionType}
      onChange={setQuestionType}
      options={questionOptions}
      />
    </div>
  );
};

export default CreateTemplatePage;
