import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
//
import { HomeStack } from "./HomeStack";
import { Favorite } from "../screens/Favorite";
import { Messages } from "../screens/Messages";
import { Profile } from "../screens/Profile";
import { Empty } from "../screens/Empty";
import { Select } from "../screens/Select";
import { colors } from "../config/colors";
import { IS_IPHONE_X } from "../utils/index";
import { TabBarAdvancedButton } from "../components/TabBarAdvancedButton";

const DEVICE_WIDTH = Dimensions.get("window").width;

const Tab = createBottomTabNavigator();

interface TabProps {
  barColor: string;
}

export const MainStack: React.FC<TabProps> = ({ barColor = "#fff" }) => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
          {IS_IPHONE_X && (
            <View
              style={[
                styles.xFillLine,
                {
                  backgroundColor: barColor,
                },
              ]}
            />
          )}
        </View>
      )}
      tabBarOptions={{
        style: styles.navigator,
        tabStyle: {
          backgroundColor: barColor,
          paddingVertical: 2,
        },
        activeTintColor: `${colors.primary}`,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Favorite") {
            iconName = "heart";
          } else if (route.name === "Profile") {
            iconName = "user-circle";
          } else if (route.name === "Messages") {
            iconName = "wechat";
          }

          return (
            <FontAwesome
              name={iconName}
              size={24}
              color={focused ? colors.activeColor : colors.inActiveColor}
            />
          );
        },
      })}
    >
      <Tab.Screen name='Home' component={HomeStack}></Tab.Screen>
      <Tab.Screen name='Favorite' component={Favorite}></Tab.Screen>
      <Tab.Screen
        // name='Empty'
        // component={Empty}
        name='Select'
        component={Select}
        options={{
          tabBarButton: (props) => (
            <TabBarAdvancedButton bgColor={barColor} {...props} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name='Messages' component={Messages}></Tab.Screen>
      <Tab.Screen name='Profile' component={Profile}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  navigatorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: "transparent",
    elevation: 30,
    //TEST
    width: DEVICE_WIDTH,
  },
  xFillLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
  },
});
