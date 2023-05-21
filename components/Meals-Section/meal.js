import { View, Image, Pressable, Text, StyleSheet } from "react-native";
import GreenBox from "../../assets/icons/green-box";

import Star from "../../assets/icons/star";
import MealType from "./meal/meal-type";

const Meal = ({ name, description, equipments, image, rating }) => {
  return (
    <View style={style.mealMain}>
      <View style={style.mealDescription}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          <View style={style.nameAndRating}>
            <Text style={style.mealName}>{name}</Text>
            <GreenBox height={8} width={8} />
          </View>
          <View style={style.rating}>
            <Text style={style.ratingText}>{rating}</Text>
            <Star height={4} width={4} />
          </View>
        </View>
        <MealType equipments={equipments} />
        <Text style={style.mealShortDesp}>{description}</Text>
      </View>

      <View style={{ position: "relative" }}>
        <View style={{ width: 100, height: 60, backgroundColor: "#1c1c1c" }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={image}
            alt={`${name} image`}
          />
        </View>
        <Pressable style={style.button}>
          <Text style={style.addButtonText}>Add</Text>
          <Text style={style.plusIcon}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mealMain: {
    display: "flex",
    flexDirection: "row",
    // gap: 60,
    justifyContent: "space-between",
    paddingVertical: 20,
    // width: "100%",
    backgroundColor: "#ffffff",
  },
  mealDescription: {
    display: "flex",
    gap: 8,
    width: 150,
  },
  mealName: {
    fontSize: 12,
    fontWeight: 600,
  },
  nameAndRating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  rating: {
    display: "flex",
    gap: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    paddingVertical: 1,
    backgroundColor: "#51C452",
  },
  ratingText: {
    fontSize: 6,
    color: "#ffffff",
  },
  button: {
    top: 50,
    left: 20,
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#FF8800",
    backgroundColor: "#FFFFFF",
    shadowColor: "#00000090",
    elevation: 4,
    borderRadius: 3,
  },
  addButtonText: { fontSize: 11, fontWeight: "bold", color: "#FF8800" },
  plusIcon: {
    top: 0,
    right: 6,
    position: "absolute",
    fontSize: 10,
    color: "#FF8800",
  },
  mealShortDesp: {
    color: "#707070",
    fontSize: 8,
  },
});

export default Meal;
