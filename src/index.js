import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AnimalScreen from "./screens/AnimalScreen";
import CarroScreen from "./screens/CarroScreen";
import CorScreen from "./screens/CorScreen";
import FrutaScreen from "./screens/FrutaScreen";
import PessoaScreen from "./screens/PessoaScreen";
import ProdutoScreen from "./screens/ProdutoScreen";
import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false,}} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="PessoaScreen" component={PessoaScreen} options={{headerShown: true}} />
        <Stack.Screen name="AnimalScreen" component={AnimalScreen} options={{headerShown: true}} />
        <Stack.Screen name="CarroScreen" component={CarroScreen} options={{headerShown: true}} />
        <Stack.Screen name="CorScreen" component={CorScreen} options={{headerShown: true}} />    
        <Stack.Screen name="FrutaScreen" component={FrutaScreen} options={{headerShown: true}} />     
        <Stack.Screen name="ProdutoScreen" component={ProdutoScreen} options={{headerShown: true}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}