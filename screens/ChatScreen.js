import React from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const ChatScreen = ({navigation}) => {
  const chatData = [
    {
      id: 'baysand-venue',
      title: 'Baysand Venue',
      subtitle: 'Mohon maaf kak, tidak bisa harga venue kami sudah paten',
      image: require('../assets/chat1.png')
    },
    {
      id: 'garuda-venue',
      title: 'Garuda Venue',
      subtitle: 'apakah mungkin untuk menyewa selama 1 hari saja?',
      image: require('../assets/chat2.png')
    },
    {
      id: 'whitebone-venue',
      title: 'Whitebone Venue',
      subtitle: 'baik kak terima kasih banyak...',
      image: require('../assets/chat3.png')
    },
    {
      id: 'greenwood-venue',
      title: 'Greenwood Venue',
      subtitle: 'sama sama kak...',
      image: require('../assets/chat4.png')
    }
  ];

  const renderChatItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={item.image} style={styles.chatImage} />
      <View style={styles.chatInfo}>
        <Text style={styles.chatTitle}>{item.title}</Text>
        <Text style={styles.chatSubtitle}>{item.subtitle}</Text>
      </View>
      <Feather name="chevron-right" size={24} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
              <Text style={{fontSize: 30, marginTop : 50, marginLeft : 20, fontWeight: 'bold'}}>Chat</Text>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderChatItem}
        contentContainerStyle={styles.chatList}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomeScreen')}>
          <FontAwesome name="home" size={24} color="#666" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chat')}>
          <FontAwesome name="comments" size={24} color="#2196F3" />
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatList: {
    padding: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  chatInfo: {
    flex: 1,
  },
  chatTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatSubtitle: {
    fontSize: 14,
    color: '#666',
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

export default ChatScreen;
