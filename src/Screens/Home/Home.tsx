import React from 'react'
import styles from './Home.module.scss'
import HomeBanner from '../../assets/homepageBanner.svg'
import Grid2 from "@mui/material/Unstable_Grid2";

function Home() {
    const { HomeContainer, HomeSideTextContainer, HomeCTA,HomeImg,Heading,SubHeading } = styles
    return (
        <>
            <Grid2
                container
                direction="row"
                gap={-1}
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
        </>
    )
}

export default Home