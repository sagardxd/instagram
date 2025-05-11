import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HashtagNavigation from '../Navigation/HashtagNavigation'
import SearchInput from '../Screens/Search/components/SearchInput'
import { SafeAreaView } from 'react-native-safe-area-context'

const HashtagLayout = () => {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
        <SearchInput isSearchActive={false} searchQuery='asdf' setIsSearchActive={() => {}} setSearchQuery={()=> {}}/>
        <HashtagNavigation/>
    </ScrollView>
  )
}

export default HashtagLayout