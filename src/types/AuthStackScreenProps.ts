import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type AuthStackParamList = {
  Signup: undefined;
  Success: undefined;
  Otp: undefined;
  MOCK: undefined;
};

export type AuthStackNavProps<T extends keyof AuthStackParamList> = {
  navigation: StackNavigationProp<AuthStackParamList, T>;
  route: RouteProp<AuthStackParamList, T>;
};
