import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import StoryList from './components/StoryList';
import PostList from './components/PostList';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Instagram</Text>
        <View style={styles.icons}>
          <Icon name="heart" size={24} style={styles.icon} />
          <Icon name="send" size={24} />
        </View>
      </View>
      <StoryList />
      <PostList />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    gap: 20,
  },
  icon: {
    marginRight: 15,
  },
});
