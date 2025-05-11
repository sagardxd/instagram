import React from 'react'
import BottomTabs from './src/Navigation/BottomTabs'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs/>
    </NavigationContainer>
  )
}


export default App