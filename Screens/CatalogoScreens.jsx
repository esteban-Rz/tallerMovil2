import React from 'react'
import { View,ImageBackground, ScrollView, StyleSheet, FlatList,Image } from 'react-native';
import { Button,Dialog,Portal,PaperProvider,Text,List,Avatar, IconButton} from 'react-native-paper';
import juegosData from '../data/ArchivosMonck.json';

const CatalogoScreens = ({navigation}) => {
  //hocks  de visilidad del dialogo y json render , favorito
    const [favoritos, setFavoritos] = React.useState({});
    const [expandedItems, setExpandedItems] = React.useState({});

// navegador por id 
  const handlePress = (id) => {
      setExpandedItems((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));

  };
  //  favoritos  
  const toggleFavorito = (id) => {
        setFavoritos((prev) => ({
          ...prev,
        [id]: !prev[id],
        }));
  };
  // renderizando los items 
  const renderItem = ({ item }) => (
    <List.Accordion
      title={item.titulo}
      description={item.genero}
      left={(props) => (
        <Image source={{ uri: item.imagenUrl }} style={styles.imagenIcono} />
      )}
      right={() => (
        <View style={styles.rating}>
          <Text style={styles.ratingText}>⭐ {item.calificacion}</Text>
          <IconButton
          icon={favoritos[item.id] ? 'heart' : 'heart-outline'}
          iconColor={favoritos[item.id] ? '#e63946' : '#888'}
          size={30}
          onPress={() => toggleFavorito(item.id)}
        />
        </View>
      )}
      expanded={!!expandedItems[item.id]}
      onPress={() => handlePress(item.id)}
    >
      <List.Item
        title={item.descripcion}
        titleNumberOfLines={6}
        style={styles.detalle}
        
      />
      <Button
      mode="contained-tonal"
      icon="information-outline"
      style={styles.botonDetalle}
      onPress={() => navigation.navigate('DETALLES_JUEGOS', { juego: item })}
    >
      Ver detalles
    </Button>
    </List.Accordion>
  );

  return (
      
      <ImageBackground source={ require("../assets/backcatalogo.jpg")}
                        style={styles.container}
      > 
      
        <List.Section title="Juegos">
        <FlatList
            data={juegosData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
        
            />
          
        </List.Section>
   
      
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
    imagenIcono: {
    width: 100,
    height: 100,
    borderRadius: 6,
    marginLeft: 8,
    alignSelf: 'center',
  },
  rating: {
    justifyContent: 'center',
    marginRight: 8,
  },
  ratingText: {
    fontWeight: 'bold',
  },
  detalle: {
    backgroundColor: '#d41c1c',
    paddingLeft: 24,
  },
   rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botonDetalle: {
    marginHorizontal: 24,
    marginBottom: 12,
    marginTop: 4,
  }
})

export default CatalogoScreens
