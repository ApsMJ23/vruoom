import React, {Suspense} from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {HeaderLazy, HomeLazy} from "./Common/Lazy";
import {createTheme, colors, ThemeProvider} from "@mui/material";
function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: colors.deepOrange[900],
                contrastText: colors.brown[50],
            },
            secondary: {
                main: colors.brown[50],
                contrastText: colors.deepOrange[900],
            },
        },
        typography:{
            fontFamily:[
                'Catamaran',
                'Roboto',
                'sans-serif'

            ].join(',')
        }
    });
  return (
   <>
       <ThemeProvider theme={theme}>
       <HeaderLazy/>
       <Suspense fallback={<div>Loading...</div>}>
       <Routes>
           <Route path='/' element={<HomeLazy/>}/>
           <Route path='*' element={<>Not Found</>}/>
       </Routes>
       </Suspense>
       </ThemeProvider>
   </>
  );
}

export default App;
