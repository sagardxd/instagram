import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

const stories = [
  { id: '1', name: 'Sagar', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'Sam', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', name: 'Saksham', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: '11', avatar: 'https://i.pravatar.cc/150?img=4' },
];

const StoryList: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={stories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.storyItem}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default StoryList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ff8501',
  },
  name: {
    fontSize: 12,
    marginTop: 4,
  },
});
