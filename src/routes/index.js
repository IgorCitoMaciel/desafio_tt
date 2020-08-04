//vamos controlar aqui as rotas de quem esta ou nao logado
import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { isAuthenticated } from './auth';


function Routes() {
    const { signed } = useContext(AuthContext);


    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;