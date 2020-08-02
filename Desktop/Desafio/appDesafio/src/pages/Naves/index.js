import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import api from "../../services/api";
import styles from './styles';


export default function Home() {
    const [ListaNaves, setListaNaves] = useState('');
    const [Page, setPage] = useState(1);
    const [Count, setCount] = useState('');




    async function pegaNaves() {

        const response = await api.get('starships/?page=' + Page);
        console.log(response.data);
        setListaNaves(response.data.results);
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
        pegaNaves();
    }, [])

    useEffect(() => {
        pegaNaves();
    }, [Page])


    return (
        <View style={styles.container} >
            <FlatList
                style={styles.lista}
                data={ListaNaves}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>

                    <View style={styles.card} >
                        <Text style={{ fontWeight: "bold", fontSize: 17 }}> Naves estelar: {item.name}</Text>
                        <Text> Modelo: {item.model}  </Text>
                        <Text> Fabricante: {item.manufacturer}  </Text>
                        <Text> Custo em créditos: {item.cost_in_credits}  </Text>
                        <Text> Comprimento: {item.length}  </Text>
                        <Text> Velocidade máxima: {item.max_atmosphering_speed}  </Text>
                        <Text> Tripulação: {item.crew}  </Text>
                        <Text> Passageiros: {item.passengers}  </Text>
                        <Text> Capacidade de carga: {item.cargo_capacity}  </Text>
                        <Text> Consumíveis: {item.consumables}  </Text>
                        <Text> Classificação hyperdrive: {item.hyperdrive_rating}  </Text>
                        <Text> MGLT: {item.MGLT}  </Text>
                        <Text> Classe de nave estelar: {item.starship_class}  </Text>





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
