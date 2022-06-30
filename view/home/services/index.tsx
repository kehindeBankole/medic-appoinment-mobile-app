import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { palette } from "../../../theme/pallete";
import { font } from "../../../theme/font";
import { s, ms, mvs } from "react-native-size-matters";
import Doctor, { Covid, Pill, Test } from "../../../components/svg";
export default function Services() {
  return (
    <View style={{ marginTop: mvs(22) }}>
      <Text style={styles.title}>Services</Text>
      <View style={styles.cardsContainer}>
        <View style={styles.cards}>
          <Doctor />
        </View>
        <View
          style={{
            ...styles.cards,
            backgroundColor: palette.passThroughOrange,
          }}
        >
          <Pill />
        </View>
        <View
          style={{
            ...styles.cards,
            backgroundColor: palette.passThroughGreen,
          }}
        >
          <Test />
        </View>
        <View
          style={{
            ...styles.cards,
            backgroundColor: palette.passThroughPink,
          }}
        >
          <Covid />
        </View>
      </View>
      <View style={styles.hero}>
        <View style={styles.heroText}>
          <Text style={styles.heroTitle}>Get the Best Medical Service </Text>
          <Text style={styles.heroSubTitle}>
            Lorem Ipsum is simply dummy text of the printing{" "}
          </Text>
        </View>
        <Image
          source={require("../../../assets/doctorBig.png")}
          style={{ alignSelf: "flex-end" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: palette.subTitle,
    fontSize: 17,
    fontFamily: font.bold,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cards: {
    width: ms(71),
    height: mvs(71),
    backgroundColor: palette.passThrough,
    borderRadius: 20,
    marginTop: mvs(12),
    justifyContent: "center",
    alignItems: "center",
  },
  hero: {
    width: "auto",
    flexDirection: "row",
    height: mvs(169),
    backgroundColor: palette.passThrough,
    marginTop: mvs(30),
    borderRadius: 28,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: ms(24),
  },
  heroText: {
    alignSelf: "center",
    width: "60%",
  },
  heroTitle: {
    fontFamily: font.bold,
    fontSize: ms(20),
  },
  heroSubTitle: {
    fontSize: ms(11),
    marginTop: mvs(10),
    fontFamily: font.regular,
  },
});
