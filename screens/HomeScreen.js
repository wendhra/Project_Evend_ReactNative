import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const venueRecommendations = [
    { id: 1, name: 'Nirmala House', 
      rating: 8.4, price: 'Rp 60.000.000', 
      image: require('../assets/nirmala.png'),
      clickable: true,
    },
    { id: 2, name: 'Skylife Venue', 
      rating: 9.5, price: 'Rp 60.000.000', 
      image: require('../assets/fotokecil2.jpg'),
      clickable: false,
    },
    { id: 3, name: 'Westwood Venue', 
      rating: 9.3, price: 'Rp 50.000.000', 
      image: require('../assets/fotokecil3.jpg'),
      clickable: false,
    },
  ];

  return (
    <View style={styles.container}>
      {/* welcome text */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/profil.jpg')} style={styles.avatar} />
          <Text style={styles.welcomeText}>Welcome, Dumbledore</Text>
        </View>
        <TouchableOpacity>
          <FontAwesome name="bell" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#666" />
        <TextInput
          placeholder="Search Location"
          style={styles.searchInput}
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.banner}>
      <Image
        source={require('../assets/banner.png')}
        style={{objectFit: "cover", marginBottom : 10, width: 430,
          height: 140,}}       />
    </View>

      {/* Venue kategori */}
      <View style={styles.categoryContainer}>
        <Text style={styles.sectionTitle}>Venue Category</Text>
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryButton}>
            <FontAwesome name="home" size={24} color="#fff" />
            <Text style={styles.categoryText}>Pribadi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <FontAwesome name="briefcase" size={24} color="#fff" />
            <Text style={styles.categoryText}>Bisnis</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}onPress={() => navigation.navigate('SearchVenuePernikahan')}>
            <FontAwesome name="heart" size={24} color="#fff" />
            <Text style={styles.categoryText}>Pernikahan</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* rekomendasi venue */}
      <Text style={styles.sectionTitle}>    Recommendation</Text>
      <FlatList
        data={venueRecommendations}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
           <View style={styles.venueCard}>
              <Image source={item.image} style={styles.venueImage} />
             <Text style={styles.venueName}>{item.name}</Text>
             <Text style={styles.venueDetails}>
               ⭐ {item.rating} - {item.price}
             </Text>
             {item.clickable && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('VenueDetail')}
            >
            <Text style={styles.buttonText}>Detail</Text>
            </TouchableOpacity>
       )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        
      />

      {/* menu bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomeScreen')}>
          <FontAwesome name="home" size={24} color="#2196F3" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ChatScreen')}>
          <FontAwesome name="comments" size={24} color="#666" />
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('History')}>
          <FontAwesome name="history" size={24} color="#666" />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ProfileScreen')}>
          <FontAwesome name="user" size={24} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 25,
  },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  welcomeText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    marginTop: 20,
    margin: 2,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchInput: { flex: 1, marginLeft: 10, color: '#000' },
  categoryContainer: { margin: 15 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 15, marginLeft: 5 },
  categories: { flexDirection: 'row', justifyContent: 'space-between' },
  categoryButton: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 120,
    marginBottom: 20,
  },

  categoryText: { color: '#fff', marginTop: 10 },
  venueCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 15,
    elevation: 3,
    padding: 10,
    width: 200,
    marginLeft: 20,
    height: 230,
  },
  venueImage: { width: '100%', height: 120, borderRadius: 10, marginBottom: 15, },
  venueName: { fontSize: 14, fontWeight: 'bold', marginVertical: 5, marginLeft: 7, },
  venueDetails: { fontSize: 12, color: '#666', marginLeft: 5, },
  button: {
    backgroundColor: "#87CEEB",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15,
    width:'50%',
    height:25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F5F5F5',
    paddingVertical: 12,
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, marginTop: 5, color: '#666' },
});

export default HomeScreen;
