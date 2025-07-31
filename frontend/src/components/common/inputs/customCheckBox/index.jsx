import React from 'react'

const CustomCheckBox = ({label, value, onChange}) => {
  return (
    <div>
        <input type='checkbox' id={label} checked={value} onClick={() => onChange(!value)}/>
    </div>
  )
}

export default CustomCheckBox