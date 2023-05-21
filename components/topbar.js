import { View, Text, StyleSheet } from "react-native";
import LeftArrow from "../assets/icons/left-arrow";

const Topbar = ({ text }) => {
  return (
    <View style={style.topbar}>
      <LeftArrow fill={"#000000"} height={11} width={11} />
      <Text style={[style.heading]}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  topbar: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
    padding: 16,
    color: "#1c1c1c",
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: 16,
    fontWeight: 600,
  },  
});

export default Topbar;
