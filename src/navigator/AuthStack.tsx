import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthStackParamList } from "../types/AuthStackScreenProps";
import { Signup } from "../screens/Signup";
import { Success } from "../screens/Success";
import { Otp } from "../screens/Otp";
import { MainStack } from "./MainStack";

const Stack = createStackNavigator<AuthStackParamList>();

interface AuthStackProps {}

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Signup'
        component={Signup}
        options={{ header: () => null }}
      ></Stack.Screen>
      <Stack.Screen
        name='Success'
        component={Success}
        options={{ header: () => null }}
      ></Stack.Screen>
      <Stack.Screen
        name='Otp'
        component={Otp}
        options={{ header: () => null }}
      ></Stack.Screen>
      <Stack.Screen
        name='MOCK'
        component={MainStack}
        options={{ header: () => null }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
