import React from 'react'
import QuestionType from '../questionType'
import { useSelector } from 'react-redux'
import { templateSelector } from '../../../../store/features/template/selectors'

const QuestionTypes = () => {
    const {questionTypes} = useSelector(templateSelector);
    
  return (

    <div className="flex flex-col gap-2">
        {questionTypes.map((questionType, index) => <QuestionType key={index} {...questionType} index={index} />)}
    </div>
  )
}

export default QuestionTypes