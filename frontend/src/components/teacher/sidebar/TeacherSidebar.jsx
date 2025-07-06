import React from "react";
import logo from "../../../images/logo/quizzy_horizontal.png"
import miniLogo from "../../../images/logo/quizzy_logo.png"
import { NavLink } from "react-router-dom";
import {SideBarTopElements} from "./utils/SideBarTopElements"
import SideBarElement from "./SideBarElement";
import SideBarButton from "./SideBarButton";
import {PanelLeftClose} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {toggleSideBar, commonSelector} from "../../../store/features/common/commonSlice"


const TeacherSideBar = () => {
    
    const dispatch = useDispatch()
    const {isSideBarOpen} = useSelector(commonSelector);
    const handleCollapse = () => {
        dispatch(toggleSideBar())
    }

    return (
        <div className="h-full w-full text-center justify-center ite flex flex-col">
                <div className="w-full h-16 border-b border-black flex justify-center items-center">
                    <img src={isSideBarOpen ? logo : miniLogo} alt="This is the logo"  className={`max-w-full ${isSideBarOpen ? "p-4" : "p-0 h-20 w-20"}`} />
                </div>

                <div className="flex flex-col flex-1 h-full justify-between">

                <div className="flex flex-col gap-2 pt-2 border-b border-black">
                    {SideBarTopElements.map((element, index)=> (
                        <SideBarElement label={element.label} to={element.to} icon={element.icon} key={index}>  </SideBarElement>
                    ))}
                </div>

                <div className="flex-1"></div>

                <div className="border-t border-black">
                    <SideBarButton label={"Collapse"} icon={<PanelLeftClose/>} onClick={handleCollapse} />
                </div>
                    </div>
        </div>
    )
}

export default TeacherSideBar;