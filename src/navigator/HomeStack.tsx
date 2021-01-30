import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Settings } from "../screens/Settings";

const Stack = createStackNavigator();

interface HomeStackProps {}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator mode='modal'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ header: () => null }}
      ></Stack.Screen>
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{ header: () => null }}
      ></Stack.Screen>
      <Stack.Screen
        name='Settings'
        component={Settings}
        options={{ header: () => null }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
