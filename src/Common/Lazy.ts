import {lazy} from "react";

// @Description: Lazy loading components here, one thing to note here is to always export default the component to prevent error.
export const HeaderLazy = lazy(()=> import("../Components/Header/Header"));