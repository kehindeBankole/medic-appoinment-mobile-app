import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { mvs, ms } from "react-native-size-matters";
import { palette } from "../../../theme/pallete";
import { font } from "../../../theme/font";
import { Entypo } from "@expo/vector-icons";

export default function Appointment() {
  return (
    <View style={{ marginTop: mvs(30), marginBottom: mvs(50) }}>
      <Text style={styles.title}>Upcoming Appointments</Text>
      <ScrollView
        style={styles.scrollCard}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ms(292)}
        snapToAlignment="center"
      >
        <View style={styles.card}>
          <View style={styles.dateCard}>
            <Text style={styles.date}>12</Text>
            <Text style={styles.day}>Tue</Text>
          </View>
          <View style={styles.detailsCard}>
            <Text style={styles.time}>09:30 AM</Text>
            <Text style={styles.name}>Dr. Mim Akhter</Text>
            <Text style={styles.reason}>Depression</Text>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.dateCard}>
            <Text style={styles.date}>12</Text>
            <Text style={styles.day}>Tue</Text>
          </View>
          <View style={styles.detailsCard}>
            <Text style={styles.time}>09:30 AM</Text>
            <Text style={styles.name}>Dr. Mim Akhter</Text>
            <Text style={styles.reason}>Depression</Text>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.card}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: palette.subTitle,
    fontSize: 17,
    fontFamily: font.bold,
  },
  scrollCard: {
    marginTop: mvs(14),
  },
  card: {
    width: ms(282),
    height: mvs(120),
    backgroundColor: palette.brandBlue,
    borderRadius: 28,
    marginRight: ms(12),
    flexDirection: "row",
    padding: ms(10),
  },
  dateCard: {
    backgroundColor: "#67b0e5",
    borderRadius: 26,
    width: ms(71),
    alignItems: "center",
    justifyContent: "center",
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
  detailsCard: {
    marginLeft: ms(16),
    alignSelf: "center",
  },
  time: {
    fontSize: ms(14),
    fontFamily: font.regular,
    color: palette.white,
  },
  name: {
    fontSize: ms(19),
    fontFamily: font.bold,
    color: palette.white,
  },
  reason: {
    fontSize: ms(15),
    fontFamily: font.regular,
    color: palette.black03,
  },
});
