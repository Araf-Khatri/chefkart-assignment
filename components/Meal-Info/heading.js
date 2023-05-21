import { Text, StyleSheet } from "react-native";

const Heading = ({ text }) => {
  return <Text style={style.heading}>{text}</Text>;
};

const style = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Heading;
