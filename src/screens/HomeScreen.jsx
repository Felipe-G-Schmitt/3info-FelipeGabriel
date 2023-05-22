import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

/**
     * Criar um TextInput que faça buscas no banco e exiba em um Flatlist
     * Lembre-se de usar a expressão "utilizando a Web Version 9 do Firebase"
     */
export default function HomeScreen({navigation}) {
    return (
        <View>
          <View>
            <Text style={{ textAlign: "center", fontSize: 20, marginBottom: "5px"}}>
              Seja bem vindo!
            </Text>
            <Button
              mode="contained"
              style={{
                color: "#fff",
              }}
              onPress={() => {
                navigation.navigate("FrutaScreen");
              }}
            >
              Fruta
            </Button>
            <Button
              mode="contained"
              style={{
                color: "#fff",
              }}
              onPress={() => {
                navigation.navigate("CarroScreen");
              }}
            >
              Carro
            </Button>
            <Button
              mode="contained"
              style={{
                color: "#fff",
              }}
              onPress={() => {
                navigation.navigate("PessoaScreen");
              }}
            >
              Pessoa
            </Button>
            <Button
              mode="contained"
              style={{
                color: "#fff",
              }}
              onPress={() => {
                navigation.navigate("CorScreen");
              }}
            >
              Cor
            </Button>
            <Button
              mode="contained"
              style={{
                color: "#fff",
              }}
              onPress={() => {
                navigation.navigate("AnimalScreen");
              }}
            >
              Animal
            </Button>
          </View>
        </View>
    )
}