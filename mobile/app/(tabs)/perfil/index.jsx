import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

const { width } = Dimensions.get('window');

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>

      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Link para uma imagem de perfil temporária
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.username}>Nome do Usuário</Text>
      <Text style={styles.email}>usuario@exemplo.com</Text>

      <View style={styles.optionsContainer}>
        <Pressable style={styles.optionButton}>
          <Icon name="user" size={20} color="#fff" style={styles.optionIcon} />
          <Text style={styles.optionText}>Editar Perfil</Text>
        </Pressable>
        <Pressable style={styles.optionButton}>
          <Entypo name="lock" size={20} color="#fff" style={styles.optionIcon} />
          <Text style={styles.optionText}>Alterar Senha</Text>
        </Pressable>
        <Pressable style={styles.optionButton}>
          <Icon name="sign-out" size={20} color="#fff" style={styles.optionIcon} />
          <Text style={styles.optionText}>Sair</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  profileImageContainer: {
    borderWidth: 3,
    borderColor: '#F20530',
    borderRadius: 75,
    padding: 5,
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  optionsContainer: {
    width: width * 0.9,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#BF0426',
    borderRadius: 5,
    marginBottom: 15,
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserProfile;
