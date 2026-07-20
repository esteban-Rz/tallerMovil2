import React from 'react'
import { View, ImageBackground ,StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Button, Card , Text} from 'react-native-paper';
const PerfilScreens = ({navigation}) => {
  return (
   <ImageBackground source={require("../assets/perfilback.jpg")}
                    style={styles.container}
   >
      <Card  style= {styles.containerCard}>
        <Card.Title
          title = "PERFIL DE USUARIO"
        />
        <Card.Cover  style={styles.imagPerfil} source={require("../assets/esteban.webp")}/>
        <Card.Content>

          <Text variant="titleLarge">Nombre </Text>
          <Text variant="bodyMedium">Esteban </Text>
         
        </Card.Content>
        

        <Card.Actions>
      <Button>estadisticas</Button>
      <Button> configuración </Button>
    </Card.Actions>
      </Card>
      <Button icon="alien" mode="contained" onPress={() =>  navigation.navigate('CATALOGO')}>
    catalogo 
  </Button>
     <Button icon="folder-star" mode="contained" onPress={() =>  navigation.navigate('FAVORITOS')}>
    favoritos 
  </Button>
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
    imagPerfil:{
      width: "50%",
      
      
    },
    containerCard: {
      backgroundColor: "rgba(250, 204, 21, 0.5)",
      
       

    }
    

})
export default PerfilScreens
