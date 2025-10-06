import {createContext} from 'react';
import { useFormik } from "formik";
import { loginSchema } from '../schemas/loginSchema';
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    formik: any;
    toRegistry: any
}

const authContext = createContext<AuthContextType>({
    formik: null,
    toRegistry: null,
});

const AuthContextProvider = ({children}:any) =>{
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      navigate("/principal");
    },
  });
  const toRegistry = () => {
    navigate("/register");
  }
  return (
    <authContext.Provider value={{
        formik,
        toRegistry,
    }}>
        {children}
    </authContext.Provider>
  );
}

export {authContext, AuthContextProvider};