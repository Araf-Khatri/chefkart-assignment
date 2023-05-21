import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";

import Refrigerator from "../../../assets/icons/refrigerator";

const MealType = ({ equipments }) => {
  return (
    <View style={style.mealTypeAndIngredient}>
      {equipments.map((data, idx) => (
        <View key={idx} style={style.refBox}>
          <Refrigerator width={7} height={12} fill={"#000000"} />
          <Text style={style.refrigerator}>{data}</Text>
        </View>
      ))}
      <View style={style.grey}></View>
      <Link href={"/meal-info"}>
        <View>
          <Text style={style.ingredient}>Ingredients</Text>
          <View>
            <Text style={style.viewList}>View list{" >"}</Text>
          </View>
        </View>
      </Link>
    </View>
  );
};

const style = StyleSheet.create({
  mealTypeAndIngredient: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  refBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  refrigerator: {
    fontSize: 5,
  },
  grey: {
    height: "100%",
    width: 1,
    background: "#D6D6D6",
  },
  ingredient: {
    fontSize: 8,
    fontWeight: "bold",
  },
  viewList: {
    fontSize: 6,
    fontWeight: "bold",
    color: "#FF8800",
  },
  getMoreDetails: {
    display: "flex",
    flexDirection: "column",
  },
});

export default MealType;
