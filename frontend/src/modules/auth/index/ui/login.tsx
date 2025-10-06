import React, { useContext } from "react";
import "src/assets/css/login.css"
import logo from "src/assets/images/logo.png"
import { authContext } from "../context/authContext";
import { InputText } from "../../../../components/input_forms/inputText";
import { InputPassword } from "../../../../components/input_forms/inputPassword";

const LoginModule: React.FC = () => {
  
  const { formik, toRegistry } = useContext(authContext);

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <img src={logo} alt="Logo" className="logo-icon" />
            <h1 className="logo-text">Notes</h1>
          </div>
          <h2>Welcome to Note</h2>
          <p>Please log in to continue</p>
        </div>

        <form className="login-form" onSubmit={formik?.handleSubmit}>
          <InputText 
            formik={formik}
            name='email'
            label='Email Address'
            placeholder= 'email@example.com'
            type='email'
          />
          <InputPassword 
            formik = {formik}
            name={'password'}
            label={'Password'}
            placeholder= {'••••••••'}
            forgotLink={
              <a href="#" className="forgot-link">
                Forgot
              </a>
            }
          />

          <button type="submit" className="btn-login">
            Login
          </button>
        </form>

        <div className="divider">
          <span>Or log in with:</span>
        </div>

        <a className="btn-google" onClick={()=>{toRegistry()}}>
          <b className="google-letter">G</b>
          Google
        </a>

        <p className="signup-text">
          No account yet? <a onClick={()=>{toRegistry()}}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginModule;
