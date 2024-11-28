import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const PlayerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="../Home" style={{ zIndex: 10 }}>
          <Text style={styles.backButton}>{'<'} Voltar</Text>
        </Link>
        <Link href='../perfil'>
        <Text style={styles.headerTitle}>Perfil</Text>
        </Link>
      </View>

      <View style={styles.albumContainer}>
        <Image
          source={require('../../../assets/images/wlr.png')}
          style={styles.albumArt}
        />
      </View>

      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>Whole Lotta Red</Text>
        <Text style={styles.artistName}>Playboi Carti</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="play-skip-back" size={36} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="pause-circle" size={64} color="#e50914" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-skip-forward" size={36} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.progressBarContainer}>
        <Text style={styles.time}>1:45</Text>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBar} />
        </View>
        <Text style={styles.time}>3:20</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616', 
    paddingHorizontal: 20, 
    paddingTop: 20, 
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 10,
    marginBottom: 20,
  },
  backButton: {
    color: '#e50914', 
  },
  headerTitle: {
    color: '#e50914', 
  },
  albumContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  albumArt: {
    width: 220,
    height: 220,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#444', 
  },
  songDetails: {
    alignItems: 'center',
    marginBottom: 30,
  },
  songTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  artistName: {
    color: '#aaa',
    fontSize: 18,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    gap: 40, 
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  time: {
    color: '#fff',
    fontSize: 14,
  },
  progressBarBackground: {
    flex: 1,
    height: 4,
    backgroundColor: '#444',
    borderRadius: 2,
    marginHorizontal: 10,
  },
  progressBar: {
    width: '50%', 
    height: '100%',
    backgroundColor: '#e50914', 
    borderRadius: 2,
  },
});

export default PlayerScreen;
