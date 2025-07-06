import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Loading from "./components/common/Loading";

const Home = lazy(()=> import('./pages/Home'));
const TeacherDashboard = lazy(()=> import("./pages/teacher/dashboard/TeacherDashboard"));
const TeacherLayout = lazy(()=> import("./components/teacher/layout/TeacherLayout"));

const App = () =>{
    return (
      <Suspense fallback={<Loading/>}>

      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route element={<TeacherLayout/>}>
              {/* This will help to show the teacher layout in each of the teacher pages */}
              <Route path="/teacher/dashboard" element={<TeacherDashboard/>}/>
          </Route>
        </Routes>
      </Router>
      </Suspense>
    )
}

export default App;