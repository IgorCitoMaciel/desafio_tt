import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import api from "../../services/api";
import styles from './styles';


export default function Home() {
    const [ListaPessoas, setListaPessoas] = useState('');
    const [Page, setPage] = useState(1);
    const [Count, setCount] = useState('');

    async function pegaPessoas() {
        const response = await api.get('people/?page=' + Page);
        console.log(response.data);
        setListaPessoas(response.data.results);
        setCount(response.data.count);
    }

    function nextPage() {
        if (Page + 1 <= Math.ceil(Count / 10)) {
            setPage(Page + 1)
        } else {
            alert('Fim da página')
        }
    }

    function prevPage() {
        if (Page - 1 < 1) {
            alert('Fim da página')
        } else {
            setPage(Page - 1)
        }
    }

    useEffect(() => {
        pegaPessoas();
    }, [])

    useEffect(() => {
        pegaPessoas();
    }, [Page])


    return (
        <View style={styles.container} >
            <FlatList
                style={styles.lista}
                data={ListaPessoas}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>

                    <View style={styles.card} >
                        <Text style={{ fontWeight: "bold", fontSize: 17 }}> Personagem: {item.name}</Text>
                        <Text> Altura: {item.height} cm </Text>
                        <Text> Peso: {item.mass}kg </Text>
                        <Text> Cor do cabelo: {item.hair_color} </Text>
                        <Text> Cor da roupa: {item.skin_color} </Text>
                        <Text> Cor dos olhos: {item.eye_color}</Text>
                        <Text> Ano de nascimento: {item.birth_year}</Text>
                        <Text> gênero: {item.gender}</Text>
                    </View>
                }
            />

            <View style={styles.AreaBtn}>
                <TouchableOpacity style={styles.Btn} onPress={() => prevPage()}>
                    <Text style={styles.TextoBtn}> Página Anterior</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Btn} onPress={() => nextPage()}>
                    <Text style={styles.TextoBtn}> Próxima Página</Text>
                </TouchableOpacity>
            </View>


        </View>

    );

}


