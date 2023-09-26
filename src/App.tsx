import React, {Suspense} from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {HeaderLazy} from "./Common/Lazy";
function App() {
  return (
   <>
       <HeaderLazy/>
       <Suspense fallback={<div>Loading...</div>}>
       <Routes>
           <Route path='/' element={<>Hello</>}/>
       </Routes>
       </Suspense>
   </>
  );
}

export default App;
