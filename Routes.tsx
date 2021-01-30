import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./src/navigator/MainStack";
import { SafeAreaView } from "react-native";

// TEST

import { AuthStack } from "./src/navigator/AuthStack";
import { Otp } from "./src/screens/Otp";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      {/* MOCK */}
      <AuthStack />
    </NavigationContainer>
  );
};
