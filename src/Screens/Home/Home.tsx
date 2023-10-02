import React from 'react'
import styles from './Home.module.scss'
import HomeBanner from '../../assets/homepageBanner.svg'

function Home() {
    const { HomeContainer, HomeSideTextContainer, HomeCTA } = styles
    return (
        <>
            <div className={HomeContainer}>
                <div>
                    <img src={HomeBanner} alt='Home Banner' />
                </div>
                <div className={HomeSideTextContainer}>
                    <h1>
                        Driving Growth For Businesses Day and Night!
                    </h1>
                    <p>
                        Advising Retail Outlets on strategy, growth plans, and market positioning.
                    </p>
                    <div style={{width:'100%'}}>
                        <button className={HomeCTA}>Discover More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home