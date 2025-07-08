import React from "react" 

const CustomTextInput = ({id="custom-input", value, onChange, className="", ...props}) => {
    return (
        <div>
        <input id={id} type="text" value={value} className={` ${className} w-full border p-1 border-black rounded-md`} onChange={(e)=> onChange(e.target.value)} {...props} />
        </div>
    )
}

export {CustomTextInput};