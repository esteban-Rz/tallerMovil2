import React from 'react'
import { Button, View,Text,StyleSheet } from 'react-native';
import BackWalcraft from '../Components/BackWalcraft';
const InicioScreens = ({navigation} ) => {
  return (
       <BackWalcraft>
      <Text>Bienvenido 🚀</Text>
      <Button 
        title="Ir a Catalogos" 
        onPress={() => navigation.navigate('CATALOGO')} 
      />
       <Button 
        title="Ir a perfil" 
        onPress={() => navigation.navigate('PERFIL')} 
      />
    </BackWalcraft>
  )
}

export default InicioScreens
