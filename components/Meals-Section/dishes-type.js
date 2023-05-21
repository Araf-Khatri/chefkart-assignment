import { View, Text, StyleSheet } from "react-native";

const DishesType = ({ id, type, active }) => {
  return (
    <View
      key={id}
      style={
        active
          ? { ...style.box, ...style.activeType }
          : { ...style.box, ...style.bg }
      }
    >
      <Text style={active ? { color: "#FF941A", fontWeight: 600 } : { color: "#8A8A8A" }}>
        {type}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  box: {
    fontSize: 10,
    alignSelf: "flex-start",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 1000,
  },
  bg: {
    backgroundColor: "transparent",
    borderColor: "#BDBDBD",
    color: "#BDBDBD",
  },
  activeType: {
    backgroundColor: "#FFF9F2",
    borderColor: "#FF941A",
    fontWeight: "bold",
  },
});

export default DishesType;
