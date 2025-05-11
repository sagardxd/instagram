import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../Screens/Home/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ReelScreen from '../Screens/ReelScreen';
import PostScreen from '../Screens/PostScreen';
import { SerachNavigation } from './SearchNavigation';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size}) => {
        let iconName: string;

        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home' : 'home';
            break;
          case 'Search':
            iconName = focused ? 'magnify' : 'magnify';
            break;
          case 'Post':
            iconName = focused ? 'plus-box' : 'plus-box-outline';
            break;
          case 'Reels':
            iconName = focused ? 'movie-open' : 'movie-open-outline';
            break;
          case 'Profile':
            iconName = focused ? 'account' : 'account-outline';
            break;
          default:
            iconName = 'help-circle-outline';
        }
      
        return <MaterialCommunityIcons name={iconName} size={size} color={color}  />;
      },
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SerachNavigation} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Reel" component={ReelScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabs