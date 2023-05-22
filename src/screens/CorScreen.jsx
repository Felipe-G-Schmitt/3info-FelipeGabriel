import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

/**
     * Criar um TextInput que faça buscas no banco e exiba em um Flatlist
     * Lembre-se de usar a expressão "utilizando a Web Version 9 do Firebase"
     */
export default function CorScreen({ navigation }) {
    const [busca, setBusca] = useState(''); //o useState é responsavel por criar variaveis ou estados em React
    const [resultado, setResultado] = useState([]);

    async function buscarcor() {
        const corRef = collection(db, 'cor');
        const buscacor = query(corRef, where('nome', '==', busca));
        // neste momento que a busca é realmente executada no banco de dados
        const resultadoSnapshot = await getDocs(buscacor);

        const listacors = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listacors);
        setResultado(listacors);

        //console.log(resultadoSnapshot);
    }

    useEffect(
        () => {
            buscarcor();
        },
        [busca]
    )
    return (
        <View style={{ alignItems: "center", backgroundColor: "#141414", height: "100%"}}>
        <View style={{ width: 350, border: "#FF4340 2px solid", backgroundColor: "", padding: 20, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 200}}>
        <Text style={{ color: "white", fontSize: 23, marginBottom: 30}}>Pesquise a cor:</Text>
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
                <Text style={{ color: "white", fontSize: 15}}>{`\u2022 ${item.hex}`}</Text>
                <Text style={{ color: "white", fontSize: 15}}>{`\u2022 ${item.cor_oposta}`}</Text>
                </View>
            )}
            key={(item) => item.id}
            />
        </View>
        </View>
    </View>
    )
}