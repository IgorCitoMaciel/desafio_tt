import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import api from "../../services/api";
import styles from './styles';


export default function Home() {
    const [ListaPlanetas, setListaPlanetas] = useState('');
    const [Page, setPage] = useState(1);
    const [Count, setCount] = useState('');




    async function pegaPlanetas() {

        const response = await api.get('planets/?page=' + Page);
        console.log(response.data);
        setListaPlanetas(response.data.results);
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
        pegaPlanetas();
    }, [])

    useEffect(() => {
        pegaPlanetas();
    }, [Page])


    return (
        <View style={styles.container} >
            <FlatList
                style={styles.lista}
                data={ListaPlanetas}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>

                    <View style={styles.card} >
                        <Text style={{ fontWeight: "bold", fontSize: 17 }}> Planeta: {item.name}</Text>
                        <Text> Período de rotação: {item.rotation_period}  </Text>
                        <Text> Período orbital: {item.orbital_period}  </Text>
                        <Text> Diâmetro: {item.diameter}  </Text>
                        <Text> Clima: {item.climate}  </Text>
                        <Text> Gravidade: {item.gravity}  </Text>
                        <Text> Terreno: {item.terrain}  </Text>
                        <Text> Água da superfície: {item.surface_water}  </Text>
                        <Text> População: {item.population}  </Text>



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

//<Text> Caracteristicas:</Text>
//<Text> Altura = {item.results.height} cm </Text>
//<Text> Peso = {item.results.mass}kg </Text>
//<Text> Cor do cabelo = {item.results.hair_color} </Text>
//<Text> Cor da roupa = {item.results.skin_color} </Text>
//<Text> Cor dos olhos = {item.results.eye_color}</Text>
//<Text> Ano de nascimento = {item.results.birth_year}</Text>
//<Text> gênero = {item.results.gender}</Text>
