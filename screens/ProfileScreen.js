import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={require('../assets/profil.jpg')} style={styles.profileImage} />
        <Text style={styles.name}>Dombledore</Text>
        <TouchableOpacity style={styles.editButton}onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.optionsSection}>
        <TouchableOpacity style={styles.optionItem}>
          <Feather name="settings" size={24} color="#333" />
          <Text style={styles.optionText}>Options</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Feather name="user" size={24} color="#333" />
          <Text style={styles.optionText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Feather name="bell" size={24} color="#333" />
          <Text style={styles.optionText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Feather name="info" size={24} color="#333" />
          <Text style={styles.optionText}>Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Feather name="log-out" size={24} color="#333" />
          <Text style={styles.optionText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomeScreen')}>
          <FontAwesome name="home" size={24} color="#666" />
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
          <FontAwesome name="user" size={24} color="#2196F3" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  optionsSection: {
    width: '100%',
    marginVertical: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 16,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F5F5F5',
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, marginTop: 5, color: '#666' },
});

export default ProfileScreen;
