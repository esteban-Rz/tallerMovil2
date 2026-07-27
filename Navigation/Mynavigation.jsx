import { createStackNavigator } from "@react-navigation/stack";
import InicioScreens from "../Screens/InicioScreens";
import CatalogoScreens from "../Screens/CatalogoScreens";
import DetallesJuegosScreens from "../Screens/DetallesJuegosScreens";
import FavoritoScreens from "../Screens/FavoritoScreens";
import PerfilScreens from "../Screens/PerfilScreens";
import InicioSesionScreens from "../Screens/InicioSesionScreen"
import { NavigationContainer } from "@react-navigation/native";
import RegistroScreen from "../Screens/RegistroScreen";

const Mystack =  createStackNavigator ()
function MystackN () {
    return (
            <Mystack.Navigator>
                <Mystack.Screen  name = "INICIO"  options={{headerShown:false}} component = {InicioScreens}/>
                <Mystack.Screen  name = "CATALOGO"  component = {CatalogoScreens}/>
                <Mystack.Screen  name = "DETALLES_JUEGOS"  component = {DetallesJuegosScreens}/>
                <Mystack.Screen  name = "FAVORITOS"  component = {FavoritoScreens}/>
                <Mystack.Screen  name = "PERFIL"  component = {PerfilScreens}/>
                <Mystack.Screen  name = "REGISTRO"  component = {RegistroScreen}/>
                <Mystack.Screen  name = "LOGING"  component = {InicioSesionScreens}/>

            </Mystack.Navigator>
    );
    
}
export function MystackF () {
    return (
        <NavigationContainer>
            <MystackN/>
        </NavigationContainer>
    )
}