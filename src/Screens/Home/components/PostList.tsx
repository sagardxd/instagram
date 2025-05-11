import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const posts = [
  {
    id: '1',
    user: 'Sagar',
    avatar: 'https://i.pravatar.cc/150?img=1',
    image: 'https://picsum.photos/400/400?random=1',
    caption: 'Enjoying the sunset!',
  },
  {
    id: '2',
    user: 'Sam',
    avatar: 'https://i.pravatar.cc/150?img=2',
    image: 'https://picsum.photos/400/400?random=2',
    caption: 'Beach time ☀️',
  },
];

const PostList: React.FC = () => {
  return (
    <>
      {posts.map((post) => (
        <View key={post.id} style={styles.card}>
          <View style={styles.header}>
            <Image source={{ uri: post.avatar }} style={styles.avatar} />
            <Text style={styles.user}>{post.user}</Text>
          </View>
          <Image source={{ uri: post.image }} style={styles.postImage} />
          <View style={styles.actions}>
            <Icon name="heart" size={24} style={styles.icon} />
            <Icon name="message-circle" size={24} style={styles.icon} />
            <Icon name="send" size={24} />
          </View>
          <Text style={styles.caption}>
            <Text style={styles.user}>{post.user}</Text> {post.caption}
          </Text>
        </View>
      ))}
    </>
  );
};

export default PostList;

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17,
  },
  user: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  actions: {
    flexDirection: 'row',
    padding: 10,
    gap: 15,
  },
  icon: {
    marginRight: 10,
  },
  caption: {
    paddingHorizontal: 10,
    fontSize: 14,
  },
});
