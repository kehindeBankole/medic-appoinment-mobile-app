import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import React from "react";
import Header from "./header";
import Container from "../../components/container";
import DrList from "./list";

export default function Schedule() {
  return (
    <Container>
      <ScrollView style={styles.cover} showsVerticalScrollIndicator={false}>
        <Header />
        <DrList/>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    //@ts-ignore
    paddingTop: StatusBar?.currentHeight + 50,
  },
});
