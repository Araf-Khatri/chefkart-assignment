import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";

import DownArrow from "../assets/icons/down-arrow";
import Meal from "../components/Meals-Section/meal";

const MealsSection = ({ dishes }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          borderTopColor: "#F2F2F2",
          borderTopWidth: 3,
        }}
      >
        <View style={style.section}>
          <View style={style.heading}>
            {/*R >      Menu */}
            <View style={style.recommendFlex}>
              {/* R > */}
              <Text style={style.recommendText}>Recommended</Text>
              <DownArrow width={10} height={5} />
            </View>

            <Pressable style={style.button}>
              <Text style={style.buttonText}>Menu</Text>
            </Pressable>
          </View>
          <View style={style.meals}>
            {dishes?.length &&
              dishes.map(
                ({ id, name, description, equipments, image, rating }) => (
                  <Meal
                    key={id}
                    name={name}
                    description={description}
                    equipments={equipments}
                    image={image}
                    rating={rating}
                  />
                )
              )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  section: {
    marginHorizontal: 24,
    flexGrow: 1,
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 18,
  },
  recommendFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  recommendText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    backgroundColor: "#1C1C1C",
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  meals: {
    display: "flex",
    gap: 1,
    height: "100%",
    backgroundColor: "#D6D6D6CE",
  },
});

export default MealsSection;
