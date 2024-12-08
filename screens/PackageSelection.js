import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

const PackageSelection = ({ navigation }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    { id: "1", name: "Nirmala Vege", price: "Rp 5.000.000" },
    { id: "2", name: "Indo Nirmala", price: "Rp 6.000.000" },
    { id: "3", name: "Favorite Feast", price: "Rp 5.500.000" },
  ];

  const handleSelectPackage = (item) => {
    setSelectedPackage(item);
    Alert.alert("Paket Dipilih", `Anda memilih paket: ${item.name}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paket Konsumsi</Text>
      <FlatList
        data={packages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.packageCard,
              selectedPackage?.id === item.id && styles.selectedPackageCard,
            ]}
            onPress={() => handleSelectPackage(item)}
          >
            <Text style={styles.packageName}>{item.name}</Text>
            <Text style={styles.packagePrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#f8f9fa" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  packageCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedPackageCard: { borderColor: "#007bff" },
  packageName: { fontSize: 16, fontWeight: "bold" },
  packagePrice: { fontSize: 14, color: "#555" },
});

export default PackageSelection;
