import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Loading from "./components/common/Loading";
import TeacherTemplatePage from "./pages/teacher/templates/";
import CreateTemplatePage from "./pages/teacher/templates/create";
import PageNotFound from "./pages/PageNotFound";

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
              <Route path="/teacher/templates" element={<TeacherTemplatePage/>}></Route>
              <Route path="/teacher/templates/create" element={<CreateTemplatePage/>} />
              
          </Route>
              {/* this will make sure that all the routes that are not present there will be redirected to this page */}
              <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Router>
      </Suspense>
    )
}

export default App;