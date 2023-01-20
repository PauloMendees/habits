import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateHabit } from '../screens/CreateHabit';
import { DayDetails } from '../screens/DayDetails';
import { Home } from '../screens/Home';

export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />
      <Screen name="habitDay" component={DayDetails} />
      <Screen name="createHabit" component={CreateHabit} />
    </Navigator>
  );
};
