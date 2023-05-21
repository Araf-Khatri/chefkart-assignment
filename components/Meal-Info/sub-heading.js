import { StyleSheet, Text } from "react-native";

const SubHeading = ({ text }) => {
  return <Text style={style.subHeading}>{text}</Text>;
};

const style = StyleSheet.create({
  subHeading: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default SubHeading;
