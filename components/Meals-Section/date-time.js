import { View, Text, StyleSheet, Dimensions } from "react-native";
import Calender from "../../assets/icons/calender";
import Clock1 from "../../assets/icons/clock1";

const DateTime = () => {
  return (
    <View
      style={[
        style.box,
        {
          marginHorizontal: 24,
        },
      ]}
    >
      <View style={style.section}>
        <Calender fill="#000" />
        <Text style={style.text}>21 May 2021</Text>
      </View>
      <View style={style.grey}></View>
      <View style={style.section}>
        <Clock1 fill="#000" />
        <Text style={style.text}>10:30 Pm-12:30 Pm</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  box: {
    top: -20,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 26,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 5, // for shadow radius
    shadowColor: "#00000060",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  icons: {
    height: 14,
    width: 14,
    resizeMode: "cover",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
  grey: {
    width: 1,
    height: "100%",
    backgroundColor: "#cccccc",
  },
});

export default DateTime;
