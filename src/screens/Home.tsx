import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
// COMPONENTS
import { StackNavProps } from "../types/StackScreenProps";
import { Search } from "../components/Search";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Trending } from "../components/Trending";

interface HomeProps {}

export function Home({ navigation, route }: StackNavProps<"Home">) {
  return (
    <View style={styles.containerStyle}>
      <Header />
      <Search />
      <FlatList
        data={null}
        renderItem={null}
        ListHeaderComponent={
          <>
            <Categories />
            <Trending />
            <Card />
            <Card />
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
