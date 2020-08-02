import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../Home/styles';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

export default function Home() {
    const navigation = useNavigation();

    useEffect(async () => {
        const value = await AsyncStorage.getItem('isLogged');
        console.log("aqui");
        console.log(value);

    }, []);

    return (
        <View style={styles.Container}>

            <View style={styles.ViewPrincipal} >
                <Text style={styles.TextoPrincipal}>
                    Para saber mais sobre o universo Star Wars, acesse o menu abaixo!
                </Text>
            </View>

            <View >
                <View style={styles.ContainerBtn}>

                    <TouchableOpacity style={styles.Btn} >
                        <Text style={styles.TextoBtn} onPress={() => navigation.navigate("Personagens")}>Personagens</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.Btn}  >
                        <Text style={styles.TextoBtn} onPress={() => navigation.navigate("Planetas")}>Planetas</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate("Naves")} >
                        <Text style={styles.TextoBtn}>Naves</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.BtnLogout} onPress={() => navigation.popToTop()}>
                        <Text style={styles.TextoBtn}>Sair do app</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}