import React from 'react'
import '../About/About.css'
import img from '../../assets/IMG_9209.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm Binuk Hewage, A 21 years old Computer Science Undergraduate from Informatics Institute of Technology affiliated to University of Westminster London.</p>
                    <p>I am well-versed in languages such as Python, and Java, and have hands-on experience with web development technologies including HTML, CSS, and JavaScript. I have a keen interest in web development and have successfully designed and implemented responsive and user-friendly websites. My projects showcase my ability to create dynamic web applications, ensuring a seamless user experience.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>React Js</p><hr style={{width: "55%"}}></hr></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width: "50%"}}></hr></div>
                    <div className="about-skill"><p>Html & Css</p><hr style={{width: "70%"}}></hr></div>
                    <div className="about-skill"><p>My SQL</p><hr style={{width: "50%"}}></hr></div>
                    <div className="about-skill"><p>Java</p><hr style={{width: "65%"}}></hr></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>Years Of Experience</p>
            </div> 
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects</p>
            </div>  
            <hr />
            <div className="about-achievement">
                <h1>4+</h1>
                <p>Languages</p>
            </div>  
            <hr />
        </div>
    </div>
  )
}

export default About