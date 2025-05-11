import {  Text, StyleSheet } from 'react-native'

import React, { useState } from 'react'
import SearchInput from '../Screens/Search/components/SearchInput'
import ExploreScreen from '../Screens/Search/ExploreScreen';
import SearchResult from '../Screens/Search/SearchResult';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchLayout = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false)

  return (
    <SafeAreaView >
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} isSearchActive={isSearchActive} setIsSearchActive={setIsSearchActive}/>
      {!isSearchActive ? <ExploreScreen /> : <SearchResult/>}
    </SafeAreaView>
  )
}


export default SearchLayout