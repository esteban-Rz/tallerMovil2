import React from 'react'
import { Button, View,Text, ImageBackground,StyleSheet } from 'react-native';
const FavoritoScreens = ({navigation}) => {
  return (
    <ImageBackground source={require("../assets/favoritoback.jpg")}
                      style={styles.container}
    >
      <Text>Bienvenido 🚀</Text>
      <Button 
        title="Ir a CATALOGO" 
        onPress={() => navigation.navigate('CATALOGO')} 
      />
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        
    },
    buttonCon:{
    backgroundColor: "#FACC15",
    width:300,
    height: 150 ,
    borderRadius: 20,
    alignItems: 'center',
    },
    buttonCon1:{
    backgroundColor: "#E5E7EB",
    width:300,
    height: 150 ,
    borderRadius: 20,
    alignItems: 'center',
    
    },
    imagenCon:{
        width:80,
        height:80,
    },
    butonTxt:{
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
},
    butonTxt:{
    color: '#101010',
    fontSize: 16,
    fontWeight: 'bold',
}
})
export default FavoritoScreens
