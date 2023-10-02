import styles from './Header.module.scss'
import {Link, useLocation} from "react-router-dom";
const Header=()=>{
    const {Banner,Logo,LinkContainer,ScheduleCTA,SchedileButton,IndividualLink,IndividualLinkActive} = styles;
    const location = useLocation();
    const links = [{
        name: "Home",
        link: "/"
    },{
        name: "About",
        link: "/about"
    },{
        name: "Contact",
        link: "/contact"
    },{
        name: "Login",
        link: "/login"
    },{
        name: "Sign Up",
        link: "/signup"
    }]
    return(
        <>
            <div className={Banner}>
                <div className={Logo}>
                    <img src="https://picsum.photos/200/400" alt="logo"/>
                </div>
                <div className={LinkContainer}>
                    {links.map((link,index)=>{
                        return(
                            <Link key={index} className={location.pathname===link.link? IndividualLinkActive :IndividualLink} to={link.link}>{link.name}</Link>
                        )
                    })}
                </div>
                <div className={ScheduleCTA}>
                    <button className={SchedileButton}>
                        Schedule A Call
                    </button>
                </div>
            </div>
        </>
    )
}
export default Header;