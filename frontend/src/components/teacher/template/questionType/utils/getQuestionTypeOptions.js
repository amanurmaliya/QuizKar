import { questionTypes } from "../../../../../types";

export const getQuestionTypeOptions = (
  questionType = questionTypes.MULTIPLE_CHOICE
) => {
  switch (questionType) {
    case questionTypes.MULTIPLE_CHOICE:
      return [
        { id: "includeHints", label: "Include Hints" },
        { id: "includeExplanations", label: "Include Explanations" },
        { id: "shuffleOptions", label: "Shuffle Options" },
        { id: "enableNegativeMarking", label: "Enable Negative Marking" },
      ];
      
      default:
          return [
            { id: "includeHints", label: "Include Hints" },
            { id: "includeExplanations", label: "Include Explanations" },
            { id: "enableNegativeMarking", label: "Enable Negative Marking" },
          ];
  }
};
