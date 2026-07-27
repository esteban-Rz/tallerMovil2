import React, { useState } from 'react'
import { View } from 'react-native';
import { Button, Snackbar, Text, TextInput } from 'react-native-paper';
import { styles } from '../src/config/theme/Styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../src/config/firebaseConfig';
import { CommonActions, useNavigation } from '@react-navigation/native';
  interface ShowMessage {
  visible: boolean;
  message: string;
  color: string;
}

// interfaz login
interface FormLogin {
  email: string;
  password: string;
}
const InicioSesionScreen = () => {
  
  // hook formulario (en minúscula para no chocar con la interfaz)
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: "",
    password: ""
  });
  // hook  navegacion 
  const navigation = useNavigation();

  // hook useState = manipular el snackbar
  const [showMessage, setShowMessage] = useState<ShowMessage>({
    visible: false,
    message: "",
    color: "#666"
  });

  // hook información password mostrar u ocultar
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  // funcion actualizar formulario
  const handleSetValues = (key: string, value: string) => {
    setFormLogin({ ...formLogin, [key]: value });
  } 
  // funcion permitir el inicio de sesión
  const handleLogingUser = async () => {
    console.log(formLogin); // ver si funciona

    
    if (!formLogin.email || !formLogin.password) {
      setShowMessage({ visible: true, message: "te falta llenar los campos", color: "#e05656" });
      return; 
    }

    try {
      const response = await signInWithEmailAndPassword(
        auth,
        formLogin.email,
        formLogin.password
      );
      console.log(response); // muestra los tokens
       navigation.navigate("PERFIL" as never);
    } catch (ex) {
      setShowMessage({ visible: true, message: "usuario o contraseña incorrecta", color: "#e05656" });
    }
  }

  return (
    <View style={styles.root}>
      <Text variant="displayMedium"> INICIA SESIÓN</Text>
      <TextInput
        label="Email"
        value={formLogin.email}
        onChangeText={(value) => handleSetValues("email", value)}
        mode="outlined"
        keyboardType="email-address"
        placeholder="escribe tu correo"
        style={styles.inputs}
      />
      <TextInput
        label="Contraseña"
        value={formLogin.password}
        onChangeText={(value) => handleSetValues("password", value)}
        mode="outlined"
        right={<TextInput.Icon icon="eye" onPress={() => setHiddenPassword(!hiddenPassword)} />}
        placeholder="escribe tu contraseña"
        secureTextEntry={hiddenPassword}
        style={styles.inputs}
      />
      <Button
        style={styles.botong}
        icon="account"
        mode="contained"
        onPress={handleLogingUser}
      >
        Iniciar sesión
      </Button>
      <Snackbar
        visible={showMessage.visible}
        onDismiss={() => setShowMessage({ ...showMessage, visible: false })} // setear y copiar el obj
        style={{ backgroundColor: showMessage.color }}
      >
        <Text>{showMessage.message}</Text>
      </Snackbar>
      <Button icon="account-circle" mode="contained"
       onPress={() => navigation.navigate("REGISTRO" as never) }>
    registrate
  </Button>
    </View>
  )
}

export default InicioSesionScreen
