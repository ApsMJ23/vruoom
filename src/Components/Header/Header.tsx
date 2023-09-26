import styles from './Header.module.scss'
const Header=()=>{
    const {Banner} = styles;
    return(
        <>
            <div className={Banner}>
                Hello
            </div>
        </>
    )
}
export default Header;