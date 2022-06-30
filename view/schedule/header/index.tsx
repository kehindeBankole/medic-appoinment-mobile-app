import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import SvgComponent from "../../../components/svg";
import { palette } from "../../../theme/pallete";
import { font } from "../../../theme/font";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import { s, vs, ms, mvs } from "react-native-size-matters";
import { Entypo } from "@expo/vector-icons";
export default function Header() {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.left}>
          <Text style={styles.title}>Schedule</Text>
        </View>
        <View>
          <Entypo name="calendar" size={30} color={palette.black03} />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <FlatList
          data={[
            { day: 12, date: "Tue" },
            { day: 12, date: "Tue" },
            { day: 12, date: "Tue" },
            { day: 12, date: "Tue" },
            { day: 12, date: "Tue" },
            { day: 12, date: "Tue" },
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.dateList}
          renderItem={({ item }) => (
            <View style={styles.dateCard}>
              <Text style={styles.date}>12</Text>
              <Text style={styles.day}>Tue</Text>
            </View>
          )}
        />

        <View style={{ paddingHorizontal: ms(28) }}>
          <FlatList
            data={[
              { day: 12, date: "Tue", background: "#1C6BA4" },
              { day: 12, date: "Tue", background: "#F1E6EAF7" },
              { day: 12, date: "Tue", background: "#FAF0DB" },
            ]}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  paddingLeft: 10,
                  height: 0,
                  borderStyle: "dotted",
                  borderRadius: 1,
                  borderWidth: 1,
                  borderColor: "red",
                  borderTopColor: "red",
                  marginTop: mvs(15),
                }}
              >
                <Text>as</Text>
              </View>
            )}
            renderItem={({ item }) => (
              <View
                style={{
                  width: "100%",
                  height: mvs(112),
                  backgroundColor: `${item.background}`,
                  borderRadius: 28,
                  marginTop: mvs(15),
                }}
              >
                <Text style={styles.date}>12</Text>
                <Text style={styles.day}>Tue</Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: ms(28),
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
  dateCard: {
    backgroundColor: palette.brandBlue,
    borderRadius: 26,
    width: ms(71),
    alignItems: "center",
    justifyContent: "center",
    height: mvs(84.62),
    marginRight: ms(10),
  },
  date: {
    fontSize: ms(22),
    fontFamily: font.extraBold,
    color: palette.white,
  },
  day: {
    fontSize: ms(16),
    fontFamily: font.semiBold,
    color: palette.white,
    marginTop: mvs(4),
  },
  dateList: {
    marginLeft: ms(28),
  },
});
