import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

/**
     * Criar um TextInput que faça buscas no banco e exiba em um Flatlist
     * Lembre-se de usar a expressão "utilizando a Web Version 9 do Firebase"
     */
export default function HomeScreen({navigation}) {
    return (
        <View style={{ alignItems: "center", display: "flex", justifyContent: "content",backgroundColor: "#141414", height: "100%",}}>
          <View style={{ flex: 1, marginTop: 200, width: 350,}}>
            <Text style={{ textAlign: "center", fontSize: 40, marginBottom: "5px", color: "white"}}>
              Seja bem vindo!
            </Text>
            <View style={{ margin: 5}}></View>
            <Button
              mode="contained"
              style={{
                color: "#fff",
                border: "4px solid #B50000",
                backgroundColor: "#FF4340",
                borderRadius: "5px",
              }}
              onPress={() => {
                navigation.navigate("FrutaScreen");
              }}
            >
              Fruta
            </Button>
            <View style={{ margin: 5}}></View>
            <Button
              mode="contained"
              style={{
                color: "#fff",
                border: "4px solid #B50000",
                backgroundColor: "#FF4340",
                borderRadius: "5px",
              }}
              onPress={() => {
                navigation.navigate("CarroScreen");
              }}
            >
              Carro
            </Button>
            <View style={{ margin: 5}}></View>
            <Button
              mode="contained"
              style={{
                color: "#fff",
                border: "4px solid #B50000",
                backgroundColor: "#FF4340",
                borderRadius: "5px",
              }}
              onPress={() => {
                navigation.navigate("PessoaScreen");
              }}
            >
              Pessoa
            </Button>
            <View style={{ margin: 5}}></View>
            <Button
              mode="contained"
              style={{
                color: "#fff",
                border: "4px solid #B50000",
                backgroundColor: "#FF4340",
                borderRadius: "5px",
              }}
              onPress={() => {
                navigation.navigate("CorScreen");
              }}
            >
              Cor
            </Button>
            <View style={{ margin: 5}}></View>
            <Button
              mode="contained"
              style={{
                color: "#fff",
                border: "4px solid #B50000",
                backgroundColor: "#FF4340",
                borderRadius: "5px",
              }}
              onPress={() => {
                navigation.navigate("AnimalScreen");
              }}
            >
              Animal
            </Button>
            <View style={{ margin: 5}}></View>
            <Button
              mode="contained"
              style={{
                color: "#fff",
                border: "4px solid #B50000",
                backgroundColor: "#FF4340",
                borderRadius: "5px",
              }}
              onPress={() => {
                navigation.navigate("ProdutoScreen");
              }}
            >
              Produto
            </Button>
          </View>
        </View>
    )
}