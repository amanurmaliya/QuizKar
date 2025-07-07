import React from "react";
import {Outlet} from "react-router-dom";
import TeacherSideBar from "../sidebar/TeacherSidebar";
import {commonSelector } from "../../../store/features/common/commonSlice"
import {useSelector} from "react-redux"
import Header from "../header";

const TeacherLayout = () => {
    const {isSideBarOpen} = useSelector(commonSelector);
    return (
        <div className="h-screen w-screen flex">
            <aside className={`${isSideBarOpen ? "w-52" : "w-12"} h-full border-r border-black transition-all`}>
                <TeacherSideBar/>
            </aside>


            {/* Here the overflow auto will adjust the content accordingly and will not allow the data to over flow uselessly and will make the nav sticky so acheiving the thing which we thought of sticky navbar */}
            <main className="flex-1 overflow-auto"> 
                
            <Header/>

            <div className="p-2">

                {/* This is used to show the real content that we are passing in between */}
                <Outlet/> 
            </div>

            </main>
        </div>
    )
}

export default TeacherLayout;