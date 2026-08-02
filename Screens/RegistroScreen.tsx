import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../src/config/firebaseConfig';
import { ImageBackground, View } from 'react-native';
import { Button, Snackbar, Text, TextInput } from 'react-native-paper';
import { styles } from '../src/config/theme/Styles';
//iterface formulario 
interface FormRegister {
    email: string ;
    password: string ;
    nick:string ;
    edad: string;
}
// mensaje a usuarios 
interface ShowMessage {
  visible:boolean;
  message: string;
  color:string ;
} 

const RegistroScreen = () => {
  // usete cambiar de estado del registro 
  const [formRegister, setformRegister] = useState<FormRegister>({
    email:"",
    password: "",
    nick: "",
    edad: ""
  });
    const [foto, setFoto] = useState<string | null>(null); // guarda la URI local de la imagen
    const [subiendo, setSubiendo] = useState(false); // loading mientras sube
  // funcion de valores del formulario
  const handleSetValue= async (key:string, value: string) =>{
    setformRegister({...formRegister,[key]:value});
  }
  //hook manupular el snack 
   const [ShowMessage, setShowMessage] = useState <ShowMessage>({
    visible: false,
    message: "",
    color: "#666"
   });
   // hock  de error 
   const [errorMsg, setErrorMsg] = useState('');

   

   const handleRegistroUser = async () => {
  if (!formRegister.email || !formRegister.password || !formRegister.nick || !formRegister.edad) {
      setShowMessage({visible: true , message:"te falta llenar los campos" ,color: "#e05656"}); // cambio de snack
    
    return;
  }

  try {
    // 1. Crea el usuario en Firebase Auth (solo email + password)
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formRegister.email,
      formRegister.password
    );

    const uid = userCredential.user.uid;

    // 2. Guarda los datos extra en Firestore, usando el mismo uid
    await setDoc(doc(db, "usuarios", uid), {
      email: formRegister.email,
      nick: formRegister.nick,
      edad: Number(formRegister.edad), // convertimos a número
      createdAt: new Date(),
    });

    console.log('Usuario registrado con éxito:', uid);
    // Aquí podrías navegar a Home, por ejemplo

  } catch (error: any) {
    console.log('Error al registrar:', error.code, error.message);
    setErrorMsg(traducirErrorFirebase(error.code));
    setShowMessage({visible: true , message:"" ,color: "#e3331b"}); // usuario creado error 
  }
}

// fusion de error 
  const traducirErrorFirebase = (code: string) => {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Ese correo ya está registrado';
      case 'auth/invalid-email':
        return 'El correo no es válido';
      case 'auth/weak-password':
        return 'La contraseña debe tener al menos 6 caracteres';
      default:
        return 'Ocurrió un error al registrar';
    }
  }

  return (
    <View style={styles.root}>
      <ImageBackground source={require("../assets/detallesback.jpg")}
                        style={styles.container}>
      <Text variant="displayMedium"> REGISTRATE</Text>
      
      <TextInput
        label="Email"
        value={formRegister.email}
        onChangeText={(value) => handleSetValue('email', value)}
        mode="outlined"
        keyboardType="email-address"
        placeholder="escribe tu correo"
        style={styles.inputs}
      />
      <TextInput
        label="Contraseña"
        value={formRegister.password}
        onChangeText={(value) => handleSetValue('password', value)}
        mode="outlined"
        placeholder="escribe tu contraseña"
        secureTextEntry
        style={styles.inputs}
      />
      <TextInput
        label="Nick"
          value={formRegister.nick}
          onChangeText={(value) => handleSetValue('nick', value)}
          mode="outlined"
          placeholder="escribe tu nick"
          style={styles.inputs}
        />
      <TextInput
          label="Edad"
          value={formRegister.edad}
          onChangeText={(value) => handleSetValue('edad', value)}
          mode="outlined"
          keyboardType="numeric"
          placeholder="escribe tu edad"
          style={styles.inputs}
/>
      <Button
        style={styles.botong}
        icon="account"
        mode="contained"
        onPress={handleRegistroUser}
        
      >
        Registrar
      </Button>
      <Snackbar
        visible={ShowMessage.visible}
        onDismiss={() => setShowMessage({...ShowMessage,visible: false})} // setear y copiar el obj
        style = {{backgroundColor: ShowMessage.color}}
      >
          <Text> {ShowMessage.message}</Text> 
          
        <Text> {errorMsg}</Text> 
      </Snackbar>
      </ImageBackground>
    </View>
                                                                                      
  )
}

export default RegistroScreen
