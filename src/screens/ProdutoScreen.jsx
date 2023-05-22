import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

/**
     * Criar um TextInput que faça buscas no banco e exiba em um Flatlist
     * Lembre-se de usar a expressão "utilizando a Web Version 9 do Firebase"
     */
export default function HomeScreen({ navigation }) {
    const [busca, setBusca] = useState(''); //o useState é responsavel por criar variaveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function buscarProduto() {
        const produtoRef = collection(db, 'produto');
        const buscaProduto = query(produtoRef, where('NomeDoProduto', '==', busca));
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscaProduto);

        const listaProdutos = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaProdutos);
        setResultado(listaProdutos);

        //console.log(resultadoSnapshot);
    }

    useEffect(
        () => {
            buscarProduto();
        },
        [busca]
    )
    return (
        <View>
            <Text>Home Screen</Text>
            <TextInput 
                label="Buscar"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                renderItem={({item}) => (
                    <View>
                    <Text>Nome: {item.NomeDoProduto}</Text>
                    <Text>Preço: {item.PrecoDoProduto}</Text>
                    <Text>Quant: {item.QuantidadeDeProduto}</Text>
                    </View>
                )}
                key={(item) => item.id}
            />
        </View>
    )
}