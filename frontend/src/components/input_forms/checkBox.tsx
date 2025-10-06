interface InputInterface {
  formik: any, 
  name: string, 
  label:string, 
  placeholder?: string,
  type?: string,
}


export const Checkbox = ({formik, name, label, placeholder= '', type = 'text'}: InputInterface) => {
  const id = Math.random().toString(36).substring(2, 15);
  return(
      <>
      <label className="checkbox-label">
            <input
            type="checkbox"
            name={name}
            checked={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            <span>Accept all terms of the agreement</span>
        </label>
        {formik.touched[name] && formik.errors[name] && (
            <div className="error-text">{formik.errors[name]}</div>
        )}
      </>
  )
}
