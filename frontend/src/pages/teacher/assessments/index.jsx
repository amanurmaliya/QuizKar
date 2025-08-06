import React, {useEffect} from "react"
import {useHeading } from "../../../hooks/index"
const TeacherAssessmentsPage = () => {

    const {setHeading, setSubHeading} = useHeading();

    useEffect(()=> {
        setHeading("Templates");
        setSubHeading("This is the page where you can Create and Manage the Templates")
    })
    return (<div>TeacherAssessmentsPage</div>)
}

export default TeacherAssessmentsPage;