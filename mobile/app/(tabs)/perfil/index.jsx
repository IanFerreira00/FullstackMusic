import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Pressable, Modal, TextInput, Alert } from 'react-native';
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfileScreen = () => {
  const user = {
    name: 'Ian Murad',
    username: '@ianthatmf',
    profileImage: '',
    bio: 'YVL',
    playlists: [
      { id: 1, title: 'Chill Vibes', image: '../../../assets/images/wunna.png' },
      { id: 2, title: 'Workout Hits', image: '../../../assets/images/333.png' },
      { id: 3, title: 'Late Night', image: '../../../assets/images/gunna.png' },
    ],
  };



  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      handleSetImage(result.assets[0].uri);
    }
  };

  const handleSetImage = async (url) => {
    try {
      const data = {
        file: url,
        upload_preset: 'ml_default',
      };
      const res = await fetch('https://api.cloudinary.com/v1_1/daduthswl/upload', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const renderPlaylists = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.playlistContainer}>
      {user.playlists.map((playlist) => (
        <TouchableOpacity key={playlist.id} style={styles.playlistItem}>
          <Image source={playlist.image} style={styles.playlistImage} />
          <Text style={styles.playlistTitle}>{playlist.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

 
  const handlePasswordChange = async () => {
    if (newPassword === '' || confirmPassword === '') {
      alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('Erro, as senhas não coincidem.');
      return;
    }

    try {
      const resposta = await fetch(`http://localhost:8000/autenticacao/${email}/nova_senha`, {
          method: 'PUT',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ senha: newPassword })
      });
      setIsModalOpen(false);
  } catch (error) {
      console.error('ERROR:', error)
  }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      if (value !== null) {
        setEmail(value)
      }
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    getData()
  },[])

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Link href="../Home" style={{zIndex: 10}}>
            <Text style={styles.backButton}>{'<'} Voltar</Text>
          </Link>
          <Text style={styles.headerTitle}>Perfil</Text>
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={() => setIsModalOpen(true)}>
              <Text style={styles.editButton}>Trocar senha</Text>
            </TouchableOpacity>
            <Link href="/Login">
              <Text style={styles.editButton}>Sair</Text>
            </Link>
          </View>
        </View>

        <View style={styles.profileSection}>
          <Pressable onPress={pickImage}>
            <Image source={{ uri: image }} style={styles.profileImage} />
          </Pressable>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Playlists</Text>
          {renderPlaylists()}
        </View>

      
        <Modal
          visible={isModalOpen}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setIsModalOpen(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Trocar senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Nova senha"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity style={styles.confirmButton} onPress={handlePasswordChange}>
                <Text style={styles.buttonText}>Confirmar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setIsModalOpen(false)}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    position: 'relative',
  },
  headerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  backButton: {
    color: '#e50914',
    fontSize: 16,
  },
  editButton: {
    color: '#e50914',
    fontSize: 16,
    marginLeft: 15,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
  },
  bio: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  section: {
    marginTop: 30,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  playlistContainer: {
    flexDirection: 'row',
  },
  playlistItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  playlistImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  playlistTitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
    width: 100,
  },

  // Estilos para a Modal
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#333', // Escuro, mas suave
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#222', // Cor escura para o input
    borderColor: '#444', // Borda discreta
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    color: '#fff', // Texto claro
    marginBottom: 15,
  },
  confirmButton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#e50914', // Cor vermelha para confirmar
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  cancelButton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#444', // Cor mais neutra para cancelar
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
