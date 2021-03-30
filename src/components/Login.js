import React from "react";
import mainLogo from '../assets/images/main_logo.png';
import useForm from './customHooks';
import validate from './validate';

function Login({}) {
    const {inputs, handleInputChange, handleSubmit ,errors} = useForm({mobile:'',mpin:''}, validate);
    console.log('in=', validate)
  return (
    <div className="main-container">
        <div className="ImageContainer">
            <img src={mainLogo} width="300px" height="85px" className="logo"/>
        </div>
        <h3> Loan Sahayak </h3>
        <br/>
        <br/>
        <div className="Page-logo">
            <i className="fas fa-user"></i><br/>
        </div>
        <h5> Existing Applicant</h5><br/>
        <br/>
        <div className="login-form">
            <form id="login" onSubmit={handleSubmit}>
                <i className="fa fa-mobile" aria-hidden="true"></i>&nbsp;&nbsp; <label className="important">Mobile Number</label><br/><br/>
                <input className="fields" type="number" name="mobile" onChange={handleInputChange} onBlur={handleInputChange} value={inputs.mobile} autocomplete="off" /><br/><br/>
                {errors.mobile && <p>{errors.mobile}</p>}
                <i className="fa fa-unlock" aria-hidden="true"></i> &nbsp;&nbsp;<label className="important">M-Pin</label><br/><br/>
                <input className="fields" type="text" name="mpin" onChange={handleInputChange} value={inputs.mpin} autocomplete="off"/><br/><br/>
                {errors.mpin && <p>{errors.mpin}</p>}
                <button className="login-button"> Login</button>
            </form><br/>
            <a href="file:///C:/Users/user/Desktop/App/Forgot-password.html">Forgot Password ?</a><br/><br/>
            <a href="file:///C:/Users/user/Desktop/App/Sign-up.html">New User ? <span className="color-red"> Sign Up</span></a>
        </div>
    </div>
  );
}

export default Login;

