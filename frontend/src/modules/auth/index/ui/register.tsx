import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputText } from "../../../../components/input_forms/inputText";
import { InputPassword } from "../../../../components/input_forms/inputPassword";
import logo from "src/assets/images/logo.png"
import "src/assets/css/register.css"

const RegisterModule: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      terms: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      terms: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required(),
    }),
    onSubmit: (values) => {
      console.log("✅ Registering user:", values);
    },
  });

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <img src={logo} alt="Logo" className="logo-icon" />
            <h1 className="logo-text">Notes</h1>
          </div>
          <h2>Create Your Account</h2>
          <p>Sign up to start organizing your notes and boost your productivity</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="login-form">
          <InputText 
            formik={formik}
            name='email'
            label='Email Address'
            placeholder= 'email@example.com'
            type='email'
          />

          <InputPassword
            formik={formik}
            name="password"
            label="Password"
            placeholder="••••••••"
          />

          {/* Submit */}
          <button type="submit" className="btn-login">
            Sign up
          </button>
        </form>

        <div className="divider">
          <span>Or sign up with:</span>
        </div>

        <button className="btn-google">
          <b className="google-letter">G</b>
          Google
        </button>

        <p className="signup-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};
export default RegisterModule;