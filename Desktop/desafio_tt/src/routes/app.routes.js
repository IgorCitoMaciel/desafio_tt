import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SendEmailSenha from '../pages/SendEmailSenha';
import ResetSenha from '../pages/ResetSenha';
import Pessoas from '../pages/Pessoas';
import Planetas from '../pages/Planetas';
import Naves from '../pages/Naves';

const AppStack = createStackNavigator();



function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }} />

            <AppStack.Screen
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

            <AppStack.Screen
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
            <AppStack.Screen
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
            <AppStack.Screen
                name="Personagens"
                component={Pessoas}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#FFD700'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Personagens'
                }}
            />
            <AppStack.Screen
                name="Planetas"
                component={Planetas}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#FFD700'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Planetas'
                }}
            />
            <AppStack.Screen
                name="Naves"
                component={Naves}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#FFD700'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Naves'
                }}
            />

        </AppStack.Navigator>
    )
}

export default AppRoutes;
