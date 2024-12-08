import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const VenueList = ({navigation}) => {
  // Dummy data for venues
  const venues = [
    {
      id: "1",
      name: "Nirmala House Semarang",
      distance: "1.1 km dari lokasi sekarang",
      location: "Semarang, Jawa Tengah",
      capacity: 250,
      price: "Rp 60.000.000",
      image: require('../assets/nirmala.png'),
      clickable: true,
    },
    {
      id: "2",
      name: "Majesty Ballroom",
      distance: "1.4 km dari lokasi sekarang",
      location: "Semarang, Jawa Tengah",
      capacity: 150,
      price: "Rp 50.000.000",
      image: require('../assets/majesty.png'),
      clickable: false,
    },
  ];

  const renderVenueCard = ({ item }) => (
  <View>
      <Image source={item.image} style={styles.venueImage} />
      <View style={styles.cardContent}>
        <Text style={styles.venueName}>{item.name}</Text>
        <Text style={styles.details}>{item.distance}</Text>
        <Text style={styles.details}>{item.location}</Text>
        <Text style={styles.details}>Kapasitas: {item.capacity} orang</Text>
        <Text style={styles.price}>{item.price}</Text>
        {item.clickable && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('VenueDetail')}
        >
          <Text style={styles.buttonText}>Lihat Detail</Text>
        </TouchableOpacity>
       )}

      </View>
    
  </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Venue di sekitar saya</Text>
        <Text style={styles.subHeaderText}>6 Juli 2024, 2 hari</Text>
      </View>
      <Text style={styles.title}>Venue Pernikahan</Text>
      <Text style={styles.subtitle}>Kami pilihkan venue terbaik buat kamu!</Text>

      <FlatList
        data={venues}
        renderItem={renderVenueCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 10,
    marginTop: 50,
  },
  header: {
    backgroundColor: "#b3e5fc",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  subHeaderText: {
    fontSize: 14,
    color: "#555",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 15,
  },
  
  venueImage: {
    width: 'auto',
    height: 150,
    alignItems: 'center',
  },
  cardContent: {
    padding: 10,
  },
  venueName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: "#555",
    marginBottom: 3,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d32f2f",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#87CEEB",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default VenueList;
