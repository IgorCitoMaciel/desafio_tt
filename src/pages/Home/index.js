import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Home/styles';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../../contexts/auth';

export default function Home() {
    const navigation = useNavigation();
    const { signOut } = useContext(AuthContext);

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


                    <TouchableOpacity style={styles.BtnLogout} onPress={() => signOut()}>
                        <Text style={styles.TextoBtn}>Sair do app</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}