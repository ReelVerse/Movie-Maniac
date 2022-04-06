import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer_component">
            <div className="row">
                <div className="col">
                    <img src="logo.jpeg" className="logo" />
                    p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero tempora dolor tempore saepe sunt officia consequuntur mollitia, nemo, odio, harum accusamus quod iste labore aliquid doloribus quas facilis quasi?
                </div>
                <div className="col">
                    <h3 >Office <div className="underline">
                        <span></span>
                    </div></h3>
                    <p>A-139</p>
                    <p> Plaza building Rohit Nagar </p>
                    <p>New Delhi,INDIA </p>
                    <p>PINCODE - 100201</p>
                    <p className="email-id">MovieMania@outlook.com</p>
                    <h4>+91-9579579676</h4>
                </div>
                <div className="col">
                    <h3>Links <div className="underline">
                        <span></span></div></h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Contacts</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>
                        Newsletter <div className="underline">
                            <span></span></div>
                    </h3>
                    <form>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <input type="email" placeholder="Enter Your email id" required />
                        <button type="submit"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </form>
                    <div className="social-icons">
                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </div>

                </div>
            </div>
            <hr />
            <p className="copyright">MovieMania 2021 - All Rights Reserved</p>
        </footer>
    )
}
