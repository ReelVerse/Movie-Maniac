import React from 'react'
import { Link } from 'react-router-dom';
import { FacebookLogin } from 'react-facebook-login';
import Facebook from './Facebook';
export const Signup = () => {

  function erase() {
    let first = document.getElementById("form3Example1m")
    let last = document.getElementById("form3Example1n")
    let mother = document.getElementById("form3Example1m1")
    let father = document.getElementById("form3Example1n1")
    let email = document.getElementById("form3Example8")
    let pwd = document.getElementById("form3Example9")
    let cpwd = document.getElementById("form3Example90")
    let male = document.getElementById("maleGender")
    let female = document.getElementById("femaleGender")
    let other = document.getElementById("otherGender")

    first.value = null;
    last.value = null;
    mother.value = null;
    father.value = null;
    email.value = null;
    pwd.value = null;
    cpwd.value = null;
    other.value = null;
    male.checked = false;
    female.checked = false;

  }


  // Things I wish to be added
  // Can we add logo  of each community (fb,google,discord) in each button

  return (
    <div>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo'/> */}
        <h1 className='App-title'>F</h1>
      </header>
      <p className='App-Intro'>To started</p>


      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-flex justify-content-center align-items-center" style={{
                    background: "url(https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80), linear-gradient(rgba(255, 82, 82, 0.5), rgba(255,234,43,0.5))",
                    backgroundSize: "cover",
                    flexDirection: "column"
                  }}>

                    <Facebook />
                    <button type="button" className="btn btn-danger btn-lg my-3">Sign up with Google </button>
                    <button type="button" className="btn btn-info btn-lg my-3">Sign up with Discord</button>
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase "
                        style={{ color: "rgba(43, 70, 226, 0.699)", fontWeight: "bold" }}>
                        Sign UP TO Reel-Verse</h3>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m"
                              className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Example1m">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1n"
                              className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Example1n">Last name</label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m1"
                              className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Example1m1">Mother's name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1n1"
                              className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Example1n1">Father's name</label>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example8" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example8">Email Address</label>
                      </div>

                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                        <h6 className="mb-0 me-4">Gender: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions"
                            id="femaleGender" value="option1" />
                          <label className="form-check-label" htmlFor="femaleGender">Female</label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions"
                            id="maleGender" value="option2" />
                          <label className="form-check-label" htmlFor="maleGender">Male</label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions"
                            id="otherGender" value="option3" />
                          <label className="form-check-label" htmlFor="otherGender">Other</label>
                        </div>

                      </div>



                      <div className="form-outline mb-4">
                        <input type="password" id="form3Example9"
                          className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example9">Password</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form3Example90"
                          className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example90">Confirm Password</label>
                      </div>



                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light btn-lg" onClick={erase}>Reset
                          all</button>

                        <Link to="/home">
                          <button type="button" className="btn btn-warning btn-lg ms-2">Submit form</button>
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div>
  )
}