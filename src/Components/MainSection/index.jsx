import React from 'react'
import Style from './style.module.css'

import APILogo from "../../../public/API-logo.webp"
import DBLogo from "../../../public/DB-logo.webp"
import JSLogo from "../../../public/JS-logo.webp"
import ReactLogo from "../../../public/react-logo.webp"

const MainSection = () => {
    return (
        <main className={`${Style.main_section}`}>
            <div className={Style.logoImage}>
                <img src="/public/vh-name-logo.png" alt="variation hub logo" width="100%"/>
            </div>
            <article className={`${Style.tagline}`}>
                <p>Empowering Your</p>
                <p>Digital future</p>
                <p>with Exceptional</p>
                <p className={Style.services}>IT Services & Education</p>
            </article>
            <div className={Style.images}>
                <img src={APILogo} alt="API images" width="30%" />
                <img src={DBLogo} alt="DB images" width="30%" />
                <img src={JSLogo} alt="Javascipt images" width="30%" />
                <img src={ReactLogo} alt="React images" width="30%" />
            </div>
            <div className={Style.icon_scroll}></div>
        </main>
    )
}

export default MainSection