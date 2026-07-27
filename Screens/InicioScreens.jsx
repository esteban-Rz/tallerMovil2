import React from 'react'
import { Button, View,Text,StyleSheet } from 'react-native';
import BackWalcraft from '../Components/BackWalcraft';
import app from '../src/config/firebaseConfig';


const InicioScreens = ({navigation} ) => {
  return (
       <BackWalcraft>
      <Text>Bienvenido 🚀</Text>
      
       <Button 
        title="Iniciar" 
        onPress={() =>  navigation.navigate('LOGING')} 
      />
       <Button 
        title="Registrarte" 
        onPress={() =>  navigation.navigate('REGISTRO')} 
      />

    </BackWalcraft>
  )
}

export default InicioScreens
