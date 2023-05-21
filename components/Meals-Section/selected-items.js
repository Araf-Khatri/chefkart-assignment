import { StyleSheet, Text, View, Dimensions } from "react-native";
import Food from "../../assets/icons/food";

const SelectedItems = () => {
  const screenWidth = Dimensions.get("screen").width;
  return (
    <View
      style={[
        style.main,
        style.selectedItems,
        {
          transform: [{ translateX: -0.3 * screenWidth }],
        },
      ]}
    >
      <View
        style={[
          style.main,
          {
            gap: 10,
          },
        ]}
      >
        <Food height={16} width={16} />
        <Text style={style.text}>3 food items selected</Text>
        <Text style={style.text}>{"-->"}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  selectedItems: {
    bottom: 20,
    left: "50%",
    position: "absolute",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: "auto",
    backgroundColor: "#1C1C1C",
    borderRadius: 7,
    // transform: [{ translateX: -50 }]
  },
  main: {
    display: "flex",
    flexDirection: "row",
  },
  foodText: {
    display: "flex",
    gap: 10,
  },
  text: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: 600,
  },
});

export default SelectedItems;
