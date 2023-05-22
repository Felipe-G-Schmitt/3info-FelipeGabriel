import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

/**
     * Criar um TextInput que faça buscas no banco e exiba em um Flatlist
     * Lembre-se de usar a expressão "utilizando a Web Version 9 do Firebase"
     */
export default function CarroScreen({ navigation }) {
    const [busca, setBusca] = useState(''); //o useState é responsavel por criar variaveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function buscarcarro() {
        const carroRef = collection(db, 'carro');
        const buscacarro = query(carroRef, where('modelo', '==', busca));
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscacarro);

        const listacarros = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listacarros);
        setResultado(listacarros);

        //console.log(resultadoSnapshot);
    }

    useEffect(
        () => {
            buscarcarro();
        },
        [busca]
    )
    return (
        <View>
            <Text>carro Screen</Text>
            <TextInput 
                label="Buscar"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                renderItem={({item}) => (
                    <View>
                    <Text>Modelo: {item.modelo}</Text>
                    <Text>Marca: {item.marca}</Text>
                    <Text>Preço: {item.preco}</Text>
                    </View>
                )}
                key={(item) => item.id}
            />
        </View>
    )
}