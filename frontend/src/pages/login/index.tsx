import React from "react";
import LoginModule from "../../modules/auth/index/ui/login";
import { AuthContextProvider } from "../../modules/auth/index/context/authContext";
import "src/assets/css/login.css"

const Login: React.FC = () => {
  return (
    <AuthContextProvider>
      <LoginModule />
    </AuthContextProvider>
  );
};

export default Login;
