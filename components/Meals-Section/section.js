import { View, StyleSheet } from "react-native";

const Section = ({ children, customStyle }) => {
  return <View style={style.section}>{children}</View>;
};

const style = StyleSheet.create({
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    // margin: 0,
    marginHorizontal: 24,
    // height: "100%"
  },
});

export default Section;
