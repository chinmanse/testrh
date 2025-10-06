import {createContext} from 'react';
import { useFormik } from "formik";
import { loginSchema } from '../schemas/loginSchema';

interface AuthContextType {
    formik: any;
}

const registerContext = createContext<AuthContextType>({
    formik: null,
});

const RegisterContextProvider = ({children}:any) =>{
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
        <registerContext.Provider value={{
            formik,
        }}>
            {children}
        </registerContext.Provider>
    );
}

export {registerContext, RegisterContextProvider};