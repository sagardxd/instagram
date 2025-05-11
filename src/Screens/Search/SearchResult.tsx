import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Profile: undefined;
  Hashtag: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type SearchResultItem = 
   { type: 'profile'; id: number; name: string; username: string }
  | { type: 'hashtag'; id: number; tag: string; count: number };


const mockResults: SearchResultItem[] = [
  { type: 'profile', id: 1, name: 'Sagar Yadav', username: '@sagardxd' },
  { type: 'hashtag', id: 2, tag: 'reactnative', count: 1200 },
  { type: 'profile', id: 3, name: 'Subhash', username: '@subhoder' },
  { type: 'hashtag', id: 4, tag: 'typescript', count: 980 },
];

const SearchResult = () => {

  const navigation = useNavigation<NavigationProp>();

  const renderItem = ({ item }: { item: SearchResultItem }) => {
    if (item.type === 'profile') {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={styles.resultItem}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.username}</Text>
        </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Hashtag')}>
        <View style={styles.resultItem}>
          <Text style={styles.title}>#{item.tag}</Text>
          <Text style={styles.subtitle}>{item.count.toLocaleString()} posts</Text>
        </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <FlatList
      data={mockResults}
      keyExtractor={(item) => `${item.type}-${item.id}`}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: 20,
  },
  resultItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default SearchResult;
