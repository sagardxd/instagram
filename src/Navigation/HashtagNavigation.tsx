import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForYouScreen from '../Screens/ForYouScreen';
import AccountScreen from '../Screens/AccountScreen';
import AudioScreen from '../Screens/Search/AudioScreen';
import TagsScren from '../Screens/Search/TagsScren';
import PlacesScreen from '../Screens/Search/PlacesScreen';

const Tab = createMaterialTopTabNavigator();

const HashtagNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Foryou" component={ForYouScreen} />
      <Tab.Screen name="Accounts" component={AccountScreen} />
      <Tab.Screen name="Audio" component={AudioScreen} />
      <Tab.Screen name="Tags" component={TagsScren} />
      <Tab.Screen name="Places" component={PlacesScreen} />
    </Tab.Navigator>
  );
}

export default HashtagNavigation;