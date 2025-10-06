interface InputInterface {
  formik: any, 
  name: string, 
  label:string, 
  placeholder?: string,
  type?: string,
}


export const InputText = ({formik, name, label, placeholder= '', type = 'text'}: InputInterface) => {
  const id = Math.random().toString(36).substring(2, 15);
  return(
      <>
        <label>{label}</label>
        <input 
          type={type}
          id={id}
          name={name}
          placeholder= {placeholder}
          value = {formik?.values[name]}
          onChange = {formik?.handleChange}
          onBlur = {formik?.handleBlur}
          className={formik?.touched.email && formik?.errors[name] ? "input-error" : ""}
        />
        {formik?.touched[name] && formik?.errors[name] && (
          <div className="error-text">{formik?.errors[name]}</div>
        )}
      </>
  )
}
