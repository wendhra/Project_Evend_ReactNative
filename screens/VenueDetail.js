import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function VenueDetailNirmala({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Gambar Venue */}
      <Image
        source={require('../assets/nirmala.png')}
        style={styles.venueImage}
      />

      {/* Tombol Lihat Paket */}
      <TouchableOpacity style={styles.packageButton}>
        <Text style={styles.packageButtonText}>Lihat Paket</Text>
      </TouchableOpacity>

      {/* Informasi Utama */}
      <View style={styles.mainInfo}>
        <Text style={styles.venueName}>Nirmala House Semarang</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>★★★★☆</Text>
        </View>
        <TouchableOpacity style={styles.chatButton}>
          <FontAwesome name="comments" size={20} color="#007AFF" />
          <Text style={styles.chatText}>Chat</Text>
        </TouchableOpacity>
      </View>

      {/* Tentang Venue */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tentang Venue</Text>
        <Text style={styles.venueDescription}>
          <Text style={{ fontWeight: "bold" }}>**Silver Room{"\n"}</Text>
          Nirmala House Semarang adalah tempat menyewakan ruang untuk mengadakan acara pernikahan dengan kapasitas...
        </Text>
          <Text style={styles.readMoreText}>Selengkapnya</Text>
      </View>

      {/* Lokasi Venue */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lokasi Venue</Text>
        <Text style={styles.venueLocation}>
          Jl. Gajahmada No.74 - 76, Jawa Tengah, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50138
        </Text>
        <View style={styles.nearbyContainer}>
          <Text>Simpang Lima</Text>
          <Text style={styles.nearbyDistance}>1 km</Text>
        </View>
        <View style={styles.nearbyContainer}>
          <Text>Queen City Mall</Text>
          <Text style={styles.nearbyDistance}>1,5 km</Text>
        </View>
      </View>

      {/* Fasilitas Utama */}
      <View style={styles.facilitiesSection}>
        <View style={styles.facilityCard}>
          <Ionicons name="snow-outline" size={30} color="#007AFF" />
          <Text style={styles.facilityText}>AC</Text>
        </View>
        <View style={styles.facilityCard}>
          <Ionicons name="wifi-outline" size={30} color="#007AFF" />
          <Text style={styles.facilityText}>Koneksi Internet</Text>
        </View>
        <View style={styles.facilityCard}>
          <Ionicons name="car-outline" size={30} color="#007AFF" />
          <Text style={styles.facilityText}>Parkir</Text>
        </View>
      </View>

      {/* Review */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Review</Text>
        <Text style={styles.reviewRating}>4.2 ★</Text>
        <Text style={styles.reviewComment}>Reno09: Staff ramah, kebersihan memuaskan</Text>
      </View>

      {/* Harga & Tombol Lanjutkan */}
      <View style={styles.footer}>
        <Text style={styles.priceText}>Harga mulai dari Rp 60.000.000</Text>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Lanjutkan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  venueImage: {
    width: "100%",
    height: 200,
  },
  packageButton: {
    position: "absolute",
    top: 140,
    right: 15,
    backgroundColor: "#007AFF",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  packageButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  mainInfo: {
    padding: 15,
    backgroundColor: "#fff",
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  venueName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ratingContainer: {
    marginTop: 5,
  },
  ratingText: {
    fontSize: 16,
    color: "#FFA500",
  },
  chatButton: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  chatText: {
    marginLeft: 5,
    color: "#007AFF",
    fontSize: 16,
  },
  section: {
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  venueDescription: {
    fontSize: 14,
    color: "#555",
  },
  readMoreText: {
    color: "#007AFF",
    marginTop: 5,
  },
  venueLocation: {
    fontSize: 14,
    marginBottom: 10,
    color: "#555",
  },
  nearbyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  nearbyDistance: {
    color: "#555",
  },
  facilitiesSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  facilityCard: {
    alignItems: "center",
  },
  facilityText: {
    marginTop: 5,
    fontSize: 14,
    color: "#555",
  },
  reviewRating: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  reviewComment: {
    fontSize: 14,
    color: "#555",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
  continueButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  continueButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
