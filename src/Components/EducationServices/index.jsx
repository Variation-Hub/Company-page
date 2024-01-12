import React from 'react'
import Style from './style.module.css';

import FrontEndImage from '../../../public/frontend-developer.jpg'
import BackendImage from '../../../public/backend-developer.webp'
import DsaImage from '../../../public/Dsa.jpg'

const EducationServices = () => {
  return (
    <div className={Style.education_section}>
      <h1>Education</h1>
      <div className={Style.edu_contain}>
        <div className={Style.edu_data}>
          <h2>Front-end Mastery</h2>
          <p>Master the art of crafting visually stunning interfaces with our immersive HTML, CSS, and Javascript training. Our expert guidance ensures your team not only develops functional websites but also creates a visually appealing and SEO-friendly online presence. Elevate user experiences with the React library, delivering websites that captivate and rank higher in search engine results.</p>
        </div>
        <div className={`${Style.image}`}>
          <img src={FrontEndImage} alt="Frontend education" width="100%" height="100%" />
        </div>
      </div>

      <div className={Style.edu_contain}>
        <div className={Style.edu_data}>
          <h2>Back-end Brilliance</h2>
          <p>Empower your team with server-side development expertise using Node.js and Express.js. Dive deep into databases, mastering SQL and MongoDB, and ensure efficient backend architecture. Our training emphasizes scalable solutions, ensuring your applications not only run efficiently but also perform well in search engine algorithms.</p>
        </div>
        <div className={`${Style.image}`}>
          <img src={BackendImage} alt="Backend education" width="100%" height="100%" />
        </div>
      </div>

      <div className={Style.edu_contain}>
        <div className={Style.edu_data}>
          <h2>Competitive Coding Edge</h2>
          <p>Data Structures and Algorithms (DSA) are crucial for competitive exams, providing a strategic edge in problem-solving. Mastery in DSA enhances efficiency and precision, ensuring candidates navigate coding challenges with confidence. Understanding algorithms fosters a systematic approach, a key attribute sought in competitive coding evaluations. DSA proficiency is not only a prerequisite for technical interviews but also a foundation for developing optimized, high-performance software solutions.</p>
        </div>
        <div className={`${Style.image}`}>
          <img src={DsaImage} alt="Dsa education" width="100%" height="100%" />
        </div>
      </div>
    </div>
  )
}

export default EducationServices