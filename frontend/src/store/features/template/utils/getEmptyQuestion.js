import { DifficultyLevelTypes, questionTypes } from "../../../../types";

export const getEmptyQuestion = ({type = questionTypes.MULTIPLE_CHOICE}) => {
  return {
    type,
    data: {
      label: "",
      questionCount: 5,
      marksPerQuestion: 2,
      difficultyLevel: DifficultyLevelTypes.EASY,
      customPrompt: "",
      options: {
        includeHints: false,
        includeExplanations: false,
        shuffleOptions: false,
        enableNegativeMarking: false,
        negativeMarks: 0,
      },
    },
  };
};
