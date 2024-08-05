import React from 'react'
import '../Footer/Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Binuk Hewage<span className='secname'>.</span></h1>
                <br  />
                <p>I am a Computer Science Undergraduate from Sri Lanka with years of experience.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter Your Email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>

            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Binuk Hewage. All rights reserved. </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer