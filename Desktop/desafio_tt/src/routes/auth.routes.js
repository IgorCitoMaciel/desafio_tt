import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SendEmailSenha from '../pages/SendEmailSenha';
import ResetSenha from '../pages/ResetSenha';

const AuthStack = createStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={SignIn} options={{ headerShown: false }} />

            <AuthStack.Screen
                name="Cadastro"
                component={SignUp}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#FFD700'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Cadastre sua conta'
                }}
            />

            <AuthStack.Screen
                name="Esqueci minha senha"
                component={SendEmailSenha}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#FFD700'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Esqueci minha senha'
                }}
            />

            <AuthStack.Screen
                name="Alterar Senha"
                component={ResetSenha}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#FFD700'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Alterar Senha'
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;