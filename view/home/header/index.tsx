import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import SvgComponent from "../../../components/svg";
import { palette } from "../../../theme/pallete";
import { font } from "../../../theme/font";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import { s, vs, ms, mvs } from "react-native-size-matters";

export default function Header() {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.left}>
          <Text style={styles.subTitle}>👋 Hello!</Text>
          <Text style={styles.title}>Shahin Alam</Text>
        </View>
        <View>
          <Image source={require("../../../assets/headerIcon.jpg")} />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <EvilIcons
          name="search"
          size={18}
          color="black"
          style={styles.inputIcon}
        />
        <FontAwesome
          name="sliders"
          size={18}
          color="black"
          style={styles.inputIcon2}
        />
        <TextInput style={styles.input} placeholder="Search medical.." />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "column",
  },
  subTitle: {
    color: palette.subTitle,
    fontFamily: font.semiBold,
    fontSize: ms(16),
  },
  title: {
    color: palette.subTitle,
    fontFamily: font.bold,
    fontSize: ms(27),
  },
  inputContainer: {
    marginTop: mvs(24),
    height: mvs(56),
    position: "relative",
  },
  input: {
    width: "auto",
    height: "100%",
    borderRadius: 18,
    backgroundColor: palette.lightBg,
    paddingHorizontal: mvs(45),
    fontFamily: font.regular,
    fontSize: ms(12),
  },
  inputIcon: {
    position: "absolute",
    top: mvs(20),
    left: mvs(15),
    zIndex: 1,
  },
  inputIcon2: {
    position: "absolute",
    top: mvs(18),
    right: mvs(15),
    zIndex: 1,
  },
});
