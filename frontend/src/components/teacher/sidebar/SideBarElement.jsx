import React from "react";
import {NavLink} from "react-router-dom"
import {commonSelector} from "../../../store/features/common/commonSlice"
import {useSelector} from "react-redux";

const SideBarElement = ({label, to, icon}) => {
    const {isSideBarOpen} = useSelector(commonSelector);

    return (<NavLink to={to} className={({isActive})=>
            isActive ? "text-blue-500" : "hover:bg-gray-500"
        }>
        
        <div className="flex gap-2 p-2 hover:bg-gray-300 rounded-lg">
            <span>{icon}</span>{isSideBarOpen && label}
            </div></NavLink>)
}

export default SideBarElement;