import React from 'react'
import { Button, View,Text,StyleSheet } from 'react-native';
import BackWalcraft from '../Components/BackWalcraft';
import app from '../src/config/firebaseConfig';
import { styles } from '../src/config/theme/Styles';


const InicioScreens = ({navigation} ) => {
  return (
       <BackWalcraft >
      
      <View style ={styles.containerinicio}>
         <Button 
        title="Iniciar" 
        onPress={() =>  navigation.navigate('LOGING')} 
      />
       <Button 
        title="Registrarte" 
        onPress={() =>  navigation.navigate('REGISTRO')} 
      />

      </View>
      

    </BackWalcraft>
  )
}

export default InicioScreens
