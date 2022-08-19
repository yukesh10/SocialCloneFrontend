import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const userRegisterInfo = {
  "name": "",
  "email": "",
  "password": "",
  "confirmPassword": ""
}

const Register = () => {

  const [userInfo, setUserInfo] = useState(userRegisterInfo);
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
  
    if (token){
      const decodedToken = jwt_decode(token);
      const currentDate = new Date();
      if (decodedToken.exp * 1000 >= currentDate.getTime()){
        navigate('/');
      } 
    } 
  }, [navigate]);

  const handleChange = (e) => {
    setUserInfo({...userInfo, [e.target.name]:e.target.value});
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const checkValidation = () => {
    // if any key in userInfo is null or empty or undefined, return false
    for (const property in userInfo){
      if (!userInfo[property]) return "Please fill out all required fields";
    }

    // check if password and confirmPassword is correct
    if (userInfo.password !== userInfo.confirmPassword) return "Password and Confirm Password does not match";

    // check if not valid email format
    const isValidEmail = validateEmail(userInfo.email);
    if (!isValidEmail) return "Please enter valid email address";

    return null;
  }

  useEffect(() => {
    setErrorMsg(null);
  }, [userInfo])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationMsg = checkValidation();
    setErrorMsg(validationMsg);

    if (!validationMsg){
      axios.post(`http://localhost:5001/auth/register`, userInfo, {
        'Content-Type': 'application/json'
      })
      .then(response => {
        const res = response?.data;
        if (res && res.successful){
          navigate("/login", {state: {message: res.message}});
        } else {
          setErrorMsg(res.message || "Error occurred when creating user!");
        }
      }).catch(err => {
        const res = err?.response?.data;
        if (res && res.message){
          setErrorMsg(res.message);
        } else {
          setErrorMsg("Error occurred when creating user!");
        }
      })
    }
  }

  return (
    <div className="main-wrap color-theme-blue">
      <div className="nav-header bg-transparent shadow-none border-0">
        <div className="nav-top w-100">
          <a href="/"><i className="feather-zap text-success display1-size me-2 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">:Social:</span> </a>
          <button className="nav-menu me-0 ms-auto"></button>

          <a href="/login" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Login</a>
          <a href="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">Register</a>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
          style={{ backgroundImage: `url("http://sociala.uitheme.net/assets/images/login-bg-2.jpg")` }}></div>
        <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
          <div className="card shadow-none border-0 ms-auto me-auto login-card">
            <div className="card-body rounded-0 text-left">
              <h2 className="fw-700 display1-size display2-md-size mb-4">Create <br />your account</h2>
              {
                errorMsg && (
                  <div className="bg-danger text-white font-xsss p-3 mb-3 rounded"> <i className="ti-face-sad"></i> {errorMsg}</div>
                )
              }
              <form onSubmit={handleSubmit}>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-user text-grey-500 pe-0"></i>
                  <input type="text" name="name" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Name" onChange={handleChange}/>
                </div>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-email text-grey-500 pe-0"></i>
                  <input type="text" name="email" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Email Address" onChange={handleChange}/>
                </div>
                <div className="form-group icon-input mb-3">
                  <input type="Password" name="password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder="Password" onChange={handleChange} />
                  <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                </div>
                <div className="form-group icon-input mb-1">
                  <input type="Password" name="confirmPassword" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder="Confirm Password" onChange={handleChange}/>
                  <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                </div>
                <div className="form-group mb-1">
                  <input type="submit" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 " value="Register"/>
                </div>
              </form>

              <div className="col-sm-12 p-0 text-left">
                <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Already have account <a href="/login" className="fw-700 ms-1">Login</a></h6>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Register