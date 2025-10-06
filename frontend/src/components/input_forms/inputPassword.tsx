import { useState } from "react";
import Show from "src/assets/icons/Show.svg"
import Hide from "src/assets/icons/Hide.svg"
interface InputInterface {
  formik: any, 
  forgotLink?: any, 
  name: string, 
  label:string, 
  placeholder?: string,
}


export const InputPassword = ({formik, name, label, placeholder= '', forgotLink=null}: InputInterface) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const id = Math.random().toString(36).substring(2, 15);

  return (
    <>
      <div className="password-group">
        <label>{label}</label>
        {
          forgotLink &&
          forgotLink
        }
      </div>
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          placeholder={placeholder}
          value = {formik?.values[name] ?? ''}
          onChange = {formik?.handleChange}
          onBlur = {formik?.handleBlur}
          className={formik?.touched[name] && formik?.errors[name] ? "input-error" : ""}
        />
        <a
          type="button"
          className="toggle-password"
          onClick={togglePassword}
        >
          {showPassword ? <img src={Hide} alt="Hide" className="logo-icon" /> : <img src={Show} alt="Show" className="logo-icon" />}
        </a>
      </div>
      {formik?.touched[name] && formik?.errors[name] && (
        <div className="error-text">{formik?.errors[name]}</div>
      )}
    </>
  )
}
