import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Dimensions } from 'react-native';
import { Link, useRouter } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome';


const { width } = Dimensions.get('window');

const navigate = useRouter()

const Login = ({ navigation }) => {
  const user = {email: 'admin', senha: 'admin'}
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(true)
  const [formData, setFormData] = useState({
      email: '',
      senha: ''
  })
  const handleInputChange = (name, value) => {
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleButton = async () => {
    if (!formData.email || !formData.senha ) {
        alert('Preencha todos os campos');
        return;
    }
     try {
        const response = await fetch('http://localhost:8000/autenticacao/login/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        console.log(response)
        if (response.status === 404) {
            alert('Email não encontrado');
            return
        }
        if (response.status === 403){
            alert('Senha incorreta');
            return
        }
        router.push('/home')

    } catch (error) {
        console.error('Erro:', error);
    } 
    
};
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#666"
          value={formData.senha}
          onChangeText={(value) => handleInputChange('senha', value)}
          secureTextEntry={showPassword}
        />
      </View>
      <Link href={'/perfil'}>
        <Pressable style={styles.button} onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </Link>
      <Pressable
        style={styles.forgotPassword}
        onPress={() => navigate.push('/Cadastro')}
      >
        <Text style={styles.forgotPasswordText}>Não tem uma conta?</Text>
      </Pressable>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#F20530',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#400207',
    marginBottom: 20,
    width: width * 0.9,
    borderRadius: 5
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#4CAF50',

  },
  button: {
    width: width * 0.9,
    height: 50,
    backgroundColor: '#BF0426',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: '#F20530',
  },
});

export default Login;
