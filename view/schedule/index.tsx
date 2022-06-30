import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import React from "react";
import Header from "./header";
import Container from "../../components/container";

export default function Schedule() {
  return (
    <Container>
      <ScrollView style={styles.cover} showsVerticalScrollIndicator={false}>
        <Header />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    paddingTop: StatusBar?.currentHeight + 50,
  },
});
