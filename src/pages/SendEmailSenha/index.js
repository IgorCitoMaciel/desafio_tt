import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, Platform, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styles from "./styles.js";

export default function SendEmailSenha() {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    function envioEmail() {
        axios.post('https://cd084716ac05.ngrok.io/sessions/forgot_password', {
            email: email,

        })
            .then(function (response) {
                if (response.status == 200) {
                    navigation.navigate("Alterar Senha");
                }
                alert('Email enviado com sucesso!');
            })
            .catch(function (error) {
                //console.log(error);
                alert('Verifique se os campo do email está correto!');
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

                <TouchableOpacity onPress={() => envioEmail()} style={styles.Botao} >
                    <Text style={styles.TextoBotao}>Enviar email</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    );
}