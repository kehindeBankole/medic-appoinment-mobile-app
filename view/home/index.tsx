import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import React from "react";
import Container from "../../components/container";
import Header from "./header";
import Services from "./services";
import Appointment from "./appointment";
import { ms } from "react-native-size-matters";

export default function Home() {
  return (
    <Container>
      <ScrollView style={styles.cover} showsVerticalScrollIndicator={false}>
        <Header />
        <Services />
        <Appointment />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    paddingTop: StatusBar?.currentHeight + 50,
    paddingHorizontal: ms(28),
  },
});
