import { RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type TabParamList = {
  Home: undefined;
  Favorite: undefined;
  Messages: undefined;
  Profile: undefined;
  Empty: undefined;
  // MOCK
  Signup: undefined;
};

export type TabNavProps<T extends keyof TabParamList> = {
  navigation: BottomTabNavigationProp<TabParamList, T>;
  route: RouteProp<TabParamList, T>;
};
