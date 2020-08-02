import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, Platform, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import styles from "./styles.js";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    function cadastrar() {
        axios.post('https://ad4aaeb1f1c4.ngrok.io/sessions', {
            email: email,
            senha: senha
        })
            .then(function (response) {
                console.log(response.data);
                alert('Cadastro realizado!')
                navigation.navigate("Login")
            })
            .catch(function (error) {
                console.log(error);
                alert('Algo deu errado!')
            });
    }

    return (
        <View style={styles.Corpo}>
            <KeyboardAvoidingView
                style={styles.Container}
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <View style={styles.CampoTexto}>

                    <TextInput
                        style={styles.AreaTexto}
                        placeholder="Email:"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholderTextColor="#4F4F4F"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.CampoTexto}>
                    <TextInput
                        style={styles.AreaTexto}
                        placeholder="Senha:"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholderTextColor="#4F4F4F"
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />
                </View>

                <TouchableOpacity onPress={() => cadastrar()} style={styles.Botao} >
                    <Text style={styles.TextoBotao}>Cadastrar</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    );
}