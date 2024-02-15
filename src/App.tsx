import React from 'react';
import './App.css';
import {HeaderLazy, HomeLazy, LoginScreenLazy} from "./Common/Lazy";
import {createTheme, colors, ThemeProvider} from "@mui/material";
import RootRoutes from "./Routes/RootRoutes";
import ApplyInterceptor from "./Common/Apis/ApplyInterceptor";

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
            warning: {
                main: '#D29211',
                light: '#FDF3F0'
            }
        },
        typography: {
            fontFamily: [
                'Catamaran',
                'Roboto',
                'sans-serif'

            ].join(',')
        }
    });
    return (
        <div>
            <ThemeProvider theme={theme}>
                <HeaderLazy/>
                <ApplyInterceptor/>
                <RootRoutes/>
            </ThemeProvider>
        </div>
    );
}

export default App;
