import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

const HomeScreen = () => {
  const songs = [
    { id: 1, title: 'Song One', image: 'https://via.placeholder.com/100' },
    { id: 2, title: 'Song Two', image: 'https://via.placeholder.com/100' },
    { id: 3, title: 'Song Three', image: 'https://via.placeholder.com/100' },
    { id: 4, title: 'Song Three', image: 'https://via.placeholder.com/100' },
    { id: 5, title: 'Song Three', image: 'https://via.placeholder.com/100' }
  ];

  const albums = [
    { id: 1, title: 'Whole Lotta Red', image: 'https://via.placeholder.com/100' },
    { id: 2, title: 'WUNNA', image: 'https://via.placeholder.com/100' },
    { id: 3, title: 'Blonde', image: 'https://via.placeholder.com/100' },
    { id: 4, title: 'Song Three', image: 'https://via.placeholder.com/100' },
    { id: 5, title: 'Song Three', image: 'https://via.placeholder.com/100' }
  ];

  const artists = [
    { id: 1, title: 'Artist A', image: 'https://via.placeholder.com/100' },
    { id: 2, title: 'Artist B', image: 'https://via.placeholder.com/100' },
    { id: 3, title: 'Artist C', image: 'https://via.placeholder.com/100' },
    { id: 4, title: 'Song Three', image: 'https://via.placeholder.com/100' },
    { id: 5, title: 'Song Three', image: 'https://via.placeholder.com/100' }
  ];

  const renderGrid = (items) => (
    <View style={styles.grid}>
      {items.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>MusicApp</Text>
      </View>


      <ScrollView>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Músicas</Text>
          {renderGrid(songs)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Albuns</Text>
          {renderGrid(albums)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Artistas</Text>
          {renderGrid(artists)}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  header: {
    padding: 10,
    backgroundColor: '#e50914', 
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  
  highlightText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 80,
    alignItems: 'center',
    marginBottom: 10,
    width: '300',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default HomeScreen;
