import React from 'react'
import Style from './style.module.css'

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
                <img src="/src/assets/API-logo.webp" alt="API images" width="30%" />
                <img src="/src/assets/DB-logo.webp" alt="DB images" width="30%" />
                <img src="/src/assets/JS-logo.webp" alt="Javascipt images" width="30%" />
                <img src="/src/assets/react-logo.webp" alt="React images" width="30%" />
            </div>
            <div className={Style.icon_scroll}></div>
        </main>
    )
}

export default MainSection