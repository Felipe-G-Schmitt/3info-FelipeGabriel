import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

/**
     * Criar um TextInput que faça buscas no banco e exiba em um Flatlist
     * Lembre-se de usar a expressão "utilizando a Web Version 9 do Firebase"
     */
export default function PessoaScreen({ navigation }) {
    const [busca, setBusca] = useState(''); //o useState é responsavel por criar variaveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function buscarpessoa() {
        const pessoaRef = collection(db, 'pessoa');
        const buscapessoa = query(pessoaRef, where('nome', '==', busca));
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscapessoa);

        const listapessoas = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listapessoas);
        setResultado(listapessoas);

        //console.log(resultadoSnapshot);
    }

    useEffect(
        () => {
            buscarpessoa();
        },
        [busca]
    )
    return (
        <View>
            <Text>pessoa Screen</Text>
            <TextInput 
                label="Buscar"
                value={busca}
                onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                renderItem={({item}) => (
                    <View>
                    <Text>Nome: {item.nome}</Text>
                    <Text>Idade: {item.idade}</Text>
                    <Text>Email: {item.email}</Text>
                    </View>
                )}
                key={(item) => item.id}
            />
        </View>
    )
}