import React, {lazy, Suspense} from "react";
const Home = lazy( ()=> import('./pages/Home'));
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Loading from "./components/common/Loading";
const App = () =>{
    return (
      <Suspense fallback={<Loading/>}>

      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
      </Suspense>
    )
}

export default App;