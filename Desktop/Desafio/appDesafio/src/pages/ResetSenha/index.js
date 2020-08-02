import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, Platform, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";



import styles from "./styles.js";

export default function ResetSenha() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState("");
    const [token, setToken] = useState("");
    const navigation = useNavigation();


    function envioEmail() {
        axios.post('https://ad4aaeb1f1c4.ngrok.io/sessions/reset_password', {
            email: email,
            senha: senha,
            token: token,

        })
            .then(function (response) {
                if (response.status == 200) {
                    navigation.navigate("Login");
                }
                alert('Senha Alterada com sucesso!');
            })
            .catch(function (error) {
                //console.log(error);
                alert('Verifique se os campos se estão corretos!');
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
                        placeholder="Código:"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholderTextColor="#4F4F4F"
                        value={token}
                        onChangeText={(text) => setToken(text)}
                    />
                </View>

                <View style={styles.CampoTexto}>
                    <TextInput
                        style={styles.AreaTexto}
                        placeholder="Nova Senha:"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholderTextColor="#4F4F4F"
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />
                </View>



                <TouchableOpacity onPress={() => envioEmail()} style={styles.Botao} >
                    <Text style={styles.TextoBotao}>Confirmar</Text>
                </TouchableOpacity>



            </KeyboardAvoidingView>
        </View>
    );
}