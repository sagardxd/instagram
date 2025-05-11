import React, { FC, useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

interface SearchInputProps {
  searchQuery: string;
  isSearchActive: boolean
  setSearchQuery: (text: string) => void;
  setIsSearchActive : (active: boolean) => void;
}

const SearchInput: FC<SearchInputProps> = ({ searchQuery, isSearchActive, setSearchQuery, setIsSearchActive }) => {
    const inputRef = useRef<TextInput>(null);

  return (  
    <View style={styles.wrapper}>
      {isSearchActive && <TouchableOpacity onPress={() => {
        setIsSearchActive(false)
        inputRef.current?.blur();
      }}>
        <Icon name="arrow-back" size={24} color="#333" style={styles.icon} />
      </TouchableOpacity>}
      <TextInput
        ref={inputRef}
        placeholder="Search..."
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onFocus={() => setIsSearchActive(true)} 
        style={styles.searchBox}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 8,
  },
  searchBox: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchInput;
