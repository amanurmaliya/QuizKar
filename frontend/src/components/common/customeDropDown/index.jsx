import React, {useState} from "react" 
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Optional: for default styles

const CustomDropDown = ({trigger, children}) => {
    return (
        <div className="!w-full relative">
            <Tippy
      interactive={true} 
      trigger="click"
      content={children}
      arrow={false} // This will hide the arrow that was seen 
      className="!bg-white !border !text-black !w-full !max-w-full border-black rounded-sm shadow-md " // Here the "!" sign means that this is important and hence this styling must be applied seriously
      placement="bottom-start" // Adjust placement as needed
    >
        {trigger}
    </Tippy>
        </div>
    )
}

export default CustomDropDown