import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const userLoginInfo = {
  "email": "",
  "password": ""
}

const Login = () => {

  const [userInfo, setUserInfo] = useState(userLoginInfo);

  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

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
      navigate("/");
    }
  }

  return (
    <div className="main-wrap color-theme-blue">
      <div className="nav-header bg-transparent shadow-none border-0">
        <div className="nav-top w-100">
          <a href="/"><i className="feather-zap text-success display1-size me-2 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">:Social:Clone:</span> </a>
          <button className="nav-menu me-0 ms-auto"></button>

          <a href="/login" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Login</a>
          <a href="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">Register</a>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
          style={{ backgroundImage: `url("http://sociala.uitheme.net/assets/images/login-bg.jpg")` }}></div>
        <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
          <div className="card shadow-none border-0 ms-auto me-auto login-card">
            <div className="card-body rounded-0 text-left">
              <h2 className="fw-700 display1-size display2-md-size mb-3">Login into <br />your account</h2>
              {
                errorMsg && (
                  <div className="bg-red text-white font-xsss p-3 mb-3 rounded"> <i className="ti-face-sad"></i> {errorMsg}</div>
                )
              }
              <form onSubmit={handleSubmit}>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-email text-grey-500 pe-0"></i>
                  <input type="text" name="email" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Email Address" onChange={handleChange}/>
                </div>
                <div className="form-group icon-input mb-1">
                  <input type="Password" name="password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder="Password" onChange={handleChange} />
                  <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                </div>
                <div className="form-check text-left mb-3">
                  <input type="checkbox" className="form-check-input mt-2" id="exampleCheck5" />
                  <label className="form-check-label font-xsss text-grey-500">Remember me</label>
                  <a href="/forgot" className="fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a>
                </div>
                <div className="form-group mb-1">
                  <input type="submit" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 " value="Login"/>
                </div>
              </form>

              <div className="col-sm-12 p-0 text-left">
                  <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Dont have account? <a href="/register" className="fw-700 ms-1">Click here to register</a></h6>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login