import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../components/screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Customer} from '../components/screens/Customer';
import TransactionScreen from '../components/screens/Transaction';
import SettingsScreen from '../components/screens/Settings';

const Tab = createBottomTabNavigator();
const TAB_ICONS = {
  Home: {
    active: 'home',
    inactive: 'home-outline',
  },
  Transaction: {
    active: 'cog-transfer',
    inactive: 'cog-transfer-outline',
  },
  Customer: {
    active: 'people',
    inactive: 'people-outline',
  },
  Settings: {
    active: 'settings',
    inactive: 'settings-outline',
  },
};
export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = focused
            ? TAB_ICONS[route.name].active
            : TAB_ICONS[route.name].inactive;
          if (route.name === 'Transaction') {
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          paddingBottom: 5,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen} // You can replace with a dedicated Services screen
        options={{
          title: 'Transaction',
        }}
      />
      <Tab.Screen
        name="Customer"
        component={Customer} // You can replace with a dedicated Profile screen
        options={{
          title: 'Customer',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen} // You can replace with a dedicated Profile screen
        options={{
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};