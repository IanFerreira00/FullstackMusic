import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Perfil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImage}>
          <Text style={styles.imagePlaceholder}>150 x 150</Text>
        </View>
      </View>
      
      <Text style={styles.userName}>Nome do Usuário</Text>
      <Text style={styles.userEmail}>usuario@exemplo.com</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Alterar Senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#ff0000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImageContainer: {
    borderWidth: 2,
    borderColor: '#ff0000',
    borderRadius: 75,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    color: '#999999',
  },
  userName: {
    fontSize: 20,
    color: '#00ff00',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#999999',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff0000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default Perfil;
