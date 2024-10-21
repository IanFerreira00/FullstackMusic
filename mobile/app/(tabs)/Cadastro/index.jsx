import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Dimensions } from 'react-native';
import { Link, useRouter } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

const { width } = Dimensions.get('window');

const navigate = useRouter()

const Cadastro = () => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.inputContainer}>
      <Entypo name="email" size={18} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#666"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          placeholderTextColor="#666"
        />
      </View>
      <Link href={''}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
      </Link>
      <Pressable
        style={styles.forgotPassword}
        onPress={() => navigate.push('/Login')}
      >
        <Text style={styles.forgotPasswordText}>Já tem uma conta?</Text>
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

export default Cadastro ;
