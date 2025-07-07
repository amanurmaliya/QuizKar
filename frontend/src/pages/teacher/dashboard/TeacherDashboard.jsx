import React, {useEffect} from "react";
import {useHeading} from "../../../hooks/index"

const TeacherDashboard = () => {

    const {setHeading, setSubHeading} = useHeading();

    useEffect(()=> {
        setHeading("Dashboard");
        setSubHeading("This is the place where you can manage you Assessments")
    }, [setHeading])
    return (
        <div>
            Teacher Dashboard
        </div>
    )
}

export default TeacherDashboard;