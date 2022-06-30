import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { palette } from "../../theme/pallete";

import Container from "../container";
import Home from "../../view/home";
import { mvs } from "react-native-size-matters";
import Schedule from "../../view/schedule";
import { font } from "../../theme/font";

function SettingsScreen() {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>settings</Text>
      </View>
    </Container>
  );
}
function ReportScreen() {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>report</Text>
      </View>
    </Container>
  );
}
const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: font.regular,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          //height: mvs(60),
          //  paddingBottom: mvs(10),
        },
        tabBarIcon: ({ focused }) => {
          let iconName: any = "home";
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Schedule") {
            iconName = "calendar";
          } else if (route.name === "Report") {
            iconName = "folder";
          } else if (route.name === "Notification") {
            iconName = "bell";
          }
          return (
            <Entypo
              name={iconName}
              size={30}
              color={focused ? palette.brandBlue : palette.black03}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="Notification" component={ReportScreen} />
    </Tab.Navigator>
  );
}
