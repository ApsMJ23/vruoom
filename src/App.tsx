import React, {Suspense} from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {HeaderLazy, HomeLazy} from "./Common/Lazy";
function App() {
  return (
   <>
       <HeaderLazy/>
       <Suspense fallback={<div>Loading...</div>}>
       <Routes>
           <Route path='/' element={<HomeLazy/>}/>
           <Route path='*' element={<>Not Found</>}/>
       </Routes>
       </Suspense>
   </>
  );
}

export default App;
