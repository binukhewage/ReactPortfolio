import React from 'react'
import '../Hero/Hero.css'
import profile_img from '../../assets/IMG_9209.jpg'

const Hero = () => {
  return (
    <div id='home' className="hero">
        <img className='home-img' src={profile_img} alt="" />
        <h1><span>I'm Binuk Hewage,</span> Computer Science Undergraduate</h1>
        <p>A 21 years old Computer Science Undergraduate from Informatics Institute of Technology affiliated to University of Westminster London.</p>
        <div class="socialm">
                <a href="https://instagram.com/binuk.he"><i class='bx bxl-instagram'></i></a>
                <a href="https://www.linkedin.com/in/binuk-hewage?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i class='bx bxl-linkedin-square' ></i></a>
                <a href="https://x.com/binukhe?s=21&t=ZZSV_r_GMQwmMBG5dY-0xw"><i class='bx bxl-twitter' ></i></a>
            </div>
        <div className="hero-action">
            
            <div className="resume">Download CV</div>
        </div>
    </div>
  )
}

export default Hero