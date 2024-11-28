import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router'

const HomeScreen = () => {
  const songs = [
    { id: 1, title: 'Over', artist: 'Playboi Carti', image: '../../../assets/images/wlr.png' },
    { id: 2, title: 'ASTROTHUNDER', artist: 'Travis Scott', image: '../../../assets/images/astroworld.png' },
    { id: 3, title: 'Dogs', artist: 'Pink Floyd', image: '../../../assets/images/animals.png' },
    { id: 4, title: 'Location', artist: 'Playboi Carti', image: '../../../assets/images/selftitled.png' },
    { id: 5, title: 'EARFQUAKE', artist: 'Tyler, The Creator, Playboi Carti', image: '../../../assets/images/earfquake.png' },
    { id: 6, title: 'Isso é Sério', artist: 'Matuê, Brandao085', image: '../../../assets/images/333.png' },
    { id: 7, title: 'Embalo', artist: 'Ryu, The Runner, Yunk Vino, Teto', image: '../../../assets/images/embalo.png' },
    { id: 8, title: 'Hoe Cakes', artist: 'MFDOOM', image: '../../../assets/images/HOECAKES.png' },
  ];

  const albums = [
    { id: 1, title: 'Whole Lotta Red', artist: 'Playboi carti', image: '../../../assets/images/wlr.png' },
    { id: 2, title: 'WUNNA', artist: 'Gunna', image: '../../../assets/images/wunna.png' },
    { id: 3, title: 'Blonde', artist: 'Frank Ocean', image: '../../../assets/images/blonde.png' },
    { id: 4, title: 'DAMN.', artist: 'Kendrick Lamar', image: '../../../assets/images/damn.png' },
    { id: 5, title: 'Caos', artist: 'Alee', image: '../../../assets/images/caos.png' },
    { id: 6, title: "We Don't Trust You", artist: 'Future, Metro Boomin', image: '../../../assets/images/wdtu.png' },
    { id: 7, title: 'A Great Chaos', artist: 'Ken Carson', image: '../../../assets/images/agc.png' },
    { id: 8, title: '333', artist: 'Matuê', image: '../../../assets/images/333.png' },
  ];

  const artists = [
    { id: 1, title: 'Playboi Carti', image: '../../../assets/images/pbc.png' },
    { id: 2, title: 'Gunna', image: '../../../assets/images/gunna.png' },
    { id: 3, title: 'Travis Scott', image: '../../../assets/images/travis.png' },
    { id: 4, title: 'Leozin', image: '../../../assets/images/leozin.png' },
    { id: 5, title: 'Young Thug', image: '../../../assets/images/thug.png' },
    { id: 6, title: 'Brandão085', image: '../../../assets/images/brandao.png' },
    { id: 7, title: 'Yeat', image: '../../../assets/images/yeat.png' },
    { id: 8, title: 'Pink Floyd', image: '../../../assets/images/pkf.png' },
  ];

  const renderHorizontalList = (items) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
      {items.map((item) => (
        <TouchableOpacity key={item.id} style={styles.itemContainer}>
          <Image source={item.image} style={styles.itemImage} />
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.artistTitle}>{item.artist}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logonav} source={require('../../../assets/images/logo.png')} />
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={[styles.navText, styles.activeNavText]}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Busca</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Biblioteca</Text>
          </TouchableOpacity>
          <Link href={"/perfil"}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Perfil</Text>
          </TouchableOpacity>
          </Link>
        </View>
      </View>

      <ScrollView>
        <Link href={"/Player"}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Músicas</Text>
          {renderHorizontalList(songs)}
        </View>
        </Link>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Álbuns</Text>
          {renderHorizontalList(albums)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Artistas</Text>
          {renderHorizontalList(artists)}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  header: {
    backgroundColor: '#fffff',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
    marginRight: '20px'
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  activeNavText: {
    color: '#e50914',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 40,
    marginBottom: 10,
  },
  horizontalList: {
    paddingHorizontal: 40,
    display: 'flex',
    gap: '30px'
  },
  itemContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  itemImage: {
    width: 150,
    height: 150,
  },
  itemTitle: {
    color: '#fff',
    fontSize: 13,
    marginTop: 5,
    textAlign: 'center',
    width: 100,
  },
  artistTitle: {
    color: '#fff',
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center',
    width: 100,
  },
  logonav: {
    width: 50,
    height: 50,
  },
});

export default HomeScreen;
