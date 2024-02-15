import {lazy} from "react";

// @Description: Lazy loading components here, one thing to note here is to always export default the component to prevent error.
export const HeaderLazy = lazy(()=> import("../Components/Header/Header"));
export const HomeLazy = lazy(()=> import('../Screens/Home/Home'));

export const LoginScreenLazy = lazy(()=> import('../Screens/LoginScreen/LoginScreen'));

export const ProfileLazy = lazy(()=> import('../Screens/ProfileScreen/ProfileScreen'));