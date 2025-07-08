import React from "react";

const CustomTextArea = ({id="custom-input", value, onChange, className="", ...props}) => {
    return (
        <div>
        <textarea id={id} type="text" value={value} className={` ${className} w-full border p-1 border-black rounded-md`} row={3} onChange={(e)=>onChange(e.target.value)} {...props} />
        </div>
    )
}

    export {CustomTextArea};