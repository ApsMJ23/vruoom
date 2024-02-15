import React, {Suspense} from "react";
import {Outlet, Route, Routes, useNavigate} from "react-router-dom";
import {HomeLazy, LoginScreenLazy, ProfileLazy} from "../Common/Lazy";
import BaseRoute from "./BaseRoute";
import ProtectRoutes from "../Common/Apis/ProtectRoutes";


const RootRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="*" element={<div>404 Page not found</div>} />
                <Route
                    path={'/'}
                    element={<BaseRoute/>}
                >
                    <Route path='/home' element={<HomeLazy/>}/>
                    <Route path='/login' element={<LoginScreenLazy/>}/>
                    <Route path='/admin' element={<ProtectRoutes/>}>
                        <Route path={'dashboard'} element={<>Dashboard</>}/>
                        <Route path={'profile'} element={<ProfileLazy/>}/>
                    </Route>

                </Route>
            </Routes>
        </Suspense>
    )
}

export default RootRoutes;