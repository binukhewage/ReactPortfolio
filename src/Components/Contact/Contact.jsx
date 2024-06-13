import React from 'react'
import '../Contact/Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a8007ed4-ded1-4d53-8cfe-1bdcbd3d240e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I.m currently available to take on new projects, We would like to respond to your queries and help you succeed. Feel free to get in touch with us. </p>
                <div className="contact-details">
                  <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>binukhe@gmail.com</p>
                  </div>
                  <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>No: 2/444, Green Town, Panadura</p>
                  </div>
                  <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+94 77 881 0168</p>
                  </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
              <label htmlFor=''>Name</label>
              <input type="text" placeholder="Enter Your Name" name="name"></input>
              <label htmlFor=''>Email</label>
              <input type="text" placeholder="Enter Your Email" name="email"></input>
              <label htmlFor=''>Write Your Message</label>
              <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
              <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact