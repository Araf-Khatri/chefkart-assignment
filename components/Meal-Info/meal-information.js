import { StyleSheet, View, Text } from "react-native";

import Star from "../../assets/icons/star";
import Clock2 from "../../assets/icons/clock2";


const MealInformation = ({ name, time }) => {

  return (
    <View style={{ marginHorizontal: 24 }} >
      <View style={style.heading}>
        <View style={style.headingFlex}>
          <Text style={[style.mealName]}>
            {name}
          </Text>
          <View style={style.rating}>
            <Text style={style.ratingText}>4.2</Text>
            <Star />
          </View>
        </View>
        <Text style={style.description}>
          Mughlai Masala is a style of cookery developed in the Indian
          Subcontinent by the imperial kitchens of the Mughal Empire
        </Text>
      </View>
      <View style={style.timeTaken}>
        <Clock2 fill={"#000000"} />
        <Text style={style.time}>{time}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  heading: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  headingFlex: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    width: 200,
    alignItems: "center",
  },
  mealName: {
    fontSize: 23,
    fontWeight: 800,
    color: "#242424",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    marginTop: 10,
    backgroundColor: "#51C452",
    borderRadius: 2,
  },
  ratingText: {
    fontSize: 6,
    color: "#ffffff",
  },
  description: {
    fontSize: 8,
    width: 170,
    color: "#A3A3A3",
  },
  timeTaken: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 28,
  },
  time: {
    fontSize: 10,
    fontWeight: 600,
  },
});

export default MealInformation;
