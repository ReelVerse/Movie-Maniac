import React from 'react'
import insta_svg from "../images/social_media/instagram.svg"
import fb_svg from "../images/social_media/facebook.svg"
import github_svg from "../images/social_media/github.svg"
import linkedin_svg from "../images/social_media/linkedin.svg"

export const ContactUs = () => {
  return (

    <div className="contact_us">
      <div className="container">
        <div className="main_1">
          <div className="first_1">
            <h2 className="heading">CONTACT US</h2>
          </div>
        </div>
        <div className="main_2">
          <form action="" className="form">
            <div className="data">
              <input type="text" id="myFirstName" placeholder="Name" />
              <label htmlFor="myFirstName">First Name</label>
            </div>
            <br />
            <div className="data">
              <input type="text" id="myLast_Name" placeholder="Last Name" />
              <label htmlFor="myLast_Name">Last Name</label>
            </div>
            <br />
            <div className="data">
              <input type="email" id="myEmail" placeholder="Email" />
              <label htmlFor="myEmail">E-mail</label>
            </div>
            <br />
            <div className="data">
              <textarea name="myText" id="myText" cols="30" rows="10" placeholder="Message"></textarea>
              <label htmlFor="myText">MESSAGE</label>
            </div>

            <button className="button" role="button">Submit</button>

          </form>
        </div>

        <div className="footer">

          <div className="social">
            <a><img src={insta_svg} alt="" height="45px" width="45px" /> </a>
          </div>
          <div className="social">
            <a> <img src={fb_svg} alt="" height="45px" width="45px" /> </a>
          </div>
          <div>
            <h3 className="topic" >Movie Maniac</h3>
          </div>
          <div className="social">
            <a> <img src={github_svg} alt="" height="45px" width="45px" /></a>
          </div>
          <div className="social">
            <a> <img src={linkedin_svg} alt="" height="45px" width="45px" />
            </a>
          </div>


        </div>
      </div>
    </div>
  )
}
