import React, { useState, useEffect, useContext } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    Platform,
    TextInput,
    Animated,
    Keyboard,
} from "react-native";
import styles from "./styles.js";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthContext } from '../../contexts/auth';
console.disableYellowBox = true

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [logo] = useState(new Animated.ValueXY({ x: 160, y: 250 }));
    const [user, setUser] = useState("");
    const navigation = useNavigation();
    const { login } = useContext(AuthContext);

    useEffect(() => {
        KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    }, []);

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 90,
                duration: 500,
            }),
            Animated.timing(logo.y, {
                toValue: 220,
                duration: 500,
            }),
        ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 160,
                duration: 500,
            }),
            Animated.timing(logo.y, {
                toValue: 250,
                duration: 500,
            }),
        ]).start();
    }

    function carregaLogin() {
        login(email, senha);

    }

    return (
        <View style={styles.Corpo}>
            <KeyboardAvoidingView
                style={styles.Container}
                behavior={Platform.OS === "ios" ? "padding" : ""}
                enabled
            >
                <Animated.Image style={{
                    height: logo.x,
                    width: logo.y,
                    marginTop: 25,
                    marginBottom: 55,

                }}
                    source={require("../../imagens/star2.png")} />

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
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity onPress={() => carregaLogin()} style={styles.Botao} >
                    <Text style={styles.TextoBotao}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={styles.TextoConta}>Criar uma conta</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Esqueci minha senha")}>
                    <Text style={styles.TextoEsqueci}>Esqueci minha senha</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    );
}