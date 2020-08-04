import React, { useState, createContext, useEffect } from 'react';
import axios from "axios";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-community/async-storage';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // const [email, setEmail] = useState("");
    // const [senha, setSenha] = useState("");
    //const navigation = useNavigation();

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, []);

    function login(email, senha) {
        axios.post('https://cd084716ac05.ngrok.io/sessions/login', {
            email: email,
            senha: senha
        })
            .then(function (response) {
                console.log(response.status)
                if (response.status == 200) {
                    let data = {
                        email: email,
                        senha: senha
                    };
                    setUser(data);
                    storageUser(data);

                    console.log(response.data)

                }

            })
            .catch(function (error) {
                //console.log(error.response.data.message);
                alert(error.response.data.message);
            });
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut() {
        await AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#FFD700" />
            </View>
        );
    }


    return (
        <AuthContext.Provider value={{ signed: !!user, login, signOut, user, loading }}>
            {children}
        </AuthContext.Provider>

    );
}

export default AuthProvider;

