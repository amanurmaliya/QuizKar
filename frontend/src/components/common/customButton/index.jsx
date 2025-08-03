import React from 'react'

const CustomButton = ({children, className, ...props}) => {
  return (
    <button className={`p-2 ${className} text-sm rounded-md bg-blue-500 hover:bg-blue-700`} {...props}>
        {children}
        </button>
  )
}

export default CustomButton