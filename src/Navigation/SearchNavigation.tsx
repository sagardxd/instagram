import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchLayout from '../Layout/SearchLayout';
import ProfileScreen from '../Screens/ProfileScreen';
import HashtagNavigation from './HashtagNavigation';
import ForYouScreen from '../Screens/ForYouScreen';
import HashtagLayout from '../Layout/HashtagLayout';

const Stack = createNativeStackNavigator();

export const SerachNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Explore" component={SearchLayout} />
      <Stack.Screen name="Hashtag" component={HashtagLayout} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}