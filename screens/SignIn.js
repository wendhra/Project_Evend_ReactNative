import React, {useState, useEffect} from "react";
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

const SignInScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={{justifycontent : 'center', alignItems: 'center'}}>
        {/* logo */}
        <Image
          source={require('../assets/Evend logo.png')}
          style={{objectFit: "cover", marginBottom : 50}} 
        />
        {/* tulisan sign in */}
        <Text style={{fontSize: 30, marginTop : 0, marginBottom : 0, fontWeight: 'bold'}}>Sign In</Text>
      </View>
      
      <View style={styles.formContainer}>
        {/* Text Input */}
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {/* tombol Sign In */}
        <TouchableOpacity style={styles.signInButton}onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        
        {/* Link */}
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>don't have an account yet? SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // bikin pengaturan scene 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // bikin ukuran scene
  formContainer: {
    width: '80%',
  },
  // bikin ukuran text input
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginVertical: 15,
  },
  // bikin tombol sign in
  signInButton: {
    backgroundColor: '#AADEF5',
    height: 48,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    marginTop : 100,
  },
  // bikin tulisan di tombol sign in
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // ini buat dont have account
  signUpText: {
    color: '#000000',
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});



export default SignInScreen
