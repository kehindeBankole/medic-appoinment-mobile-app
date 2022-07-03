import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SvgComponent from "../../../components/svg";
import { palette } from "../../../theme/pallete";
import { font } from "../../../theme/font";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import { s, vs, ms, mvs } from "react-native-size-matters";
import { Entypo } from "@expo/vector-icons";

export default function DrList() {
  return (
    <View>
      <View style={{ paddingHorizontal: ms(28) , marginTop:mvs(24)}}>
        <FlatList
          data={[
            { day: 12, date: "Tue", background: "#1C6BA4" },
            { day: 12, date: "Tue", background: "#F1E6EAF7" },
            { day: 12, date: "Tue", background: "#FAF0DB" },
          ]}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <>
              <View
                style={[{ height: 1, overflow: "hidden", marginTop: mvs(20) }]}
              >
                <View
                  style={[
                    {
                      height: 2,
                      borderWidth: 1,
                      borderColor: "#ddd",
                      borderStyle: "dashed",
                      width: "75%",
                      alignSelf: "flex-end",
                    },
                  ]}
                ></View>
              </View>
              <Text style={styles.past}>12:00 PM</Text>
              <View
                style={{
                  backgroundColor: `${item.background}`,
                  ...styles.drCard,
                }}
              >
                <Image source={require("../../../assets/doctor.png")} />
                <View style={{ marginLeft: ms(17) }}>
                  <Text
                    style={{
                      ...styles.time,
                      color: item.background !== "#1C6BA4" ? "black" : "white",
                    }}
                  >
                    12:30 PM
                  </Text>
                  <Text
                    style={{
                      ...styles.doctorName,
                      color: item.background !== "#1C6BA4" ? "black" : "white",
                    }}
                  >
                    Dr. Zim Akhter
                  </Text>
                  <Text
                    style={{
                      ...styles.doctorType,
                      color: item.background !== "#1C6BA4" ? "black" : "white",
                    }}
                  >
                    Cardiologist
                  </Text>
                </View>
                <TouchableOpacity
                  style={{ position: "absolute", right: ms(16), top: mvs(16) }}
                >
                  <Entypo
                    name="dots-three-horizontal"
                    size={16}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  drCard: {
    width: "100%",
    height: mvs(112),
    borderRadius: 28,
    marginTop: mvs(20),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ms(18),
  },
  time: {
    fontSize: ms(14),
    fontFamily: font.regular,
    color: palette.white,
  },
  doctorName: {
    fontSize: ms(19),
    fontFamily: font.bold,
    color: palette.white,
  },
  doctorType: {
    fontSize: ms(15),
    fontFamily: font.regular,
    color: "rgba(255, 255, 255, 0.65)",
  },
  past: {
    position: "absolute",
    marginTop: mvs(10),
    color: palette.grey,
    fontFamily: font.bold,
    fontSize: ms(14),
  },
});
