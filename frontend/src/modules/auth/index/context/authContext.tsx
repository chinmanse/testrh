import {createContext} from 'react';
import { useFormik } from "formik";
import { loginSchema } from '../schemas/loginSchema';

interface AuthContextType {
    formik: any;
}

const authContext = createContext<AuthContextType>({
    formik: null,
});

const AuthContextProvider = ({children}:any) =>{
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            console.log("Form values:", values);
            alert(`Logged in as: ${values.email}`);
        },
    });
    return (
        <authContext.Provider value={{
            formik,
        }}>
            {children}
        </authContext.Provider>
    );
}

export {authContext, AuthContextProvider};