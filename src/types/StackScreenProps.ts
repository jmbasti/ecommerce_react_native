import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type StackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  Select: undefined;
};

export type StackNavProps<T extends keyof StackParamList> = {
  navigation: StackNavigationProp<StackParamList, T>;
  route: RouteProp<StackParamList, T>;
};
