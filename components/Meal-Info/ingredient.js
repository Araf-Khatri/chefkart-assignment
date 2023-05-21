import { StyleSheet, Text, View } from "react-native";
import SubHeading from "./sub-heading";
import DownArrow from "../../assets/icons/down-arrow";

const Ingredients = ({ heading, ingredientUsed }) => {
  return (
    <View style={style.ingredientFlex}>
      <View style={style.heading}>
        <SubHeading text={heading} />
        <DownArrow />
      </View>
      <View style={style.subFlex}>
        {!!ingredientUsed?.length &&
          ingredientUsed.map(({ name, quantity }) => {
            return (
              <View key={name} style={style.flex}>
                <Text style={style.text}>{name}</Text>
                <Text style={style.text}>{quantity}</Text>
              </View>
            );
          })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  heading: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  ingredientFlex: {
    display: "flex",
    gap: 10,
  },
  subFlex: {
    display: "flex",
    gap: 8,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 10,
  },
});
export default Ingredients;
