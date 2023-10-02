import React from 'react'
import styles from './Home.module.scss'
import HomeBanner from '../../assets/homepageBanner.svg'
import Grid2 from "@mui/material/Unstable_Grid2";
import {AdsClick} from "@mui/icons-material";
import IntroBannerSvg from '../../assets/IntroPageBanner.svg'

function Home() {
    const { HomeContainer, HomeSideTextContainer, HomeCTA,HomeImg,Heading,SubHeading,IntroBanner,IntroBannerContainer,IntroImg,IntroImgContainer } = styles
    return (
        <>
            <Grid2
                container
                direction="row"
                sx={{backgroundColor:'primary.main'}}
            >
                <Grid2 xs={12} sm={12} md={6} lg={6} xl={6} >
                    <img className={HomeImg} src={HomeBanner} alt="Home Banner" />
                </Grid2>
                <Grid2 xs={12} sm={12} md={6} lg={6} xl={6}  >
                    <div className={HomeContainer}>
                        <div className={HomeSideTextContainer}>
                            <div className={Heading}>Driving Growth For Businesses Day and Night!</div>
                            <p className={SubHeading}>Advising Retail Outlets on strategy, growth plans, and market positioning.</p>
                            <div style={{width:"100%"}}>
                                <button className={HomeCTA}>Get Started</button>
                            </div>
                        </div>
                    </div>
                </Grid2>
            </Grid2>
            <Grid2
                container
                direction="row"
            >
                <Grid2 xs={12} sm={12} md={6} lg={6} xl={6} >
                    <div className={HomeContainer}>
                        <div className={HomeSideTextContainer} style={{color:'black'}}>
                            <div className={IntroBannerContainer}>
                                <AdsClick fontSize={"large"} color={'warning'}/>
                                <span className={IntroBanner}>Introduction</span>
                            </div>
                            <h1 className={Heading}>Lisences and Fees optimization</h1>
                            <p className={SubHeading}>Leveraging technology for better reminders for all your Liscences and Fees that are due.</p>
                            <div style={{width:"100%"}}>
                                <button style={{border:'1px solid black'}} className={HomeCTA}>Learn More</button>
                            </div>
                        </div>
                    </div>
                </Grid2>
                <Grid2 style={{display:'flex',alignItems:'center'}} xs={12} sm={12} md={6} lg={6} xl={6} >
                    <div className={IntroImgContainer}>
                    <img className={IntroImg} src={IntroBannerSvg} alt="Home Banner" />
                    </div>
                </Grid2>
            </Grid2>
        </>
    )
}

export default Home