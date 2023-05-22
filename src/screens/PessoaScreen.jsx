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
        <View style={{ alignItems: "center", backgroundColor: "#141414", height: "100%"}}>
        <View style={{ width: 350, border: "#FF4340 2px solid", backgroundColor: "", padding: 20, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 200}}>
        <Text style={{ color: "white", fontSize: 23, marginBottom: 30}}>Pesquise o modelo do carro:</Text>
        <TextInput 
            label="Buscar"
            underlineColor="white"
            activeUnderlineColor="white"
            placeholderTextColor={"white"}
            placeholder="Digite o nome do animal"
            textColor="white"
            style={{ backgroundColor: "73449C", width: "100%", color: "white",}}
            value={busca}
            onChangeText={setBusca}
        />
        <View style={{ alignContent: "center",marginTop: 30, border:"2px solid #FF4340", padding: 20, borderRadius: 3}}>
            <Text style={{ color: "white", marginBottom: 10, fontSize: 20}}>Resultado: </Text>
            <FlatList
            data={resultado}
            renderItem={({item}) => (
                <View>
                <Text style={{ color: "white", fontSize: 15,}}>{`\u2022 ${item.nome}`}</Text>
                <Text style={{ color: "white", fontSize: 15}}>{`\u2022 ${item.idade}`}</Text>
                <Text style={{ color: "white", fontSize: 15}}>{`\u2022 ${item.email}`}</Text>
                </View>
            )}
            key={(item) => item.id}
            />
        </View>
        </View>
    </View>
    )
}