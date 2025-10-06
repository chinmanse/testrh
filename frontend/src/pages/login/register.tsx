import React from 'react';
import RegisterModule from '../../modules/auth/index/ui/register';
import { RegisterContextProvider } from '../../modules/auth/index/context/registerContext';

const Login: React.FC = () => {
  return (
    <RegisterContextProvider>
      <RegisterModule />
    </RegisterContextProvider>
  );
};

export default Login;