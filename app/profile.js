import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

import Heading from "../components/Meal-Info/heading";
import Topbar from "../components/topbar";
import AbsoluteImages from "../components/Meal-Info/absolute-imgs";
import MealInformation from "../components/Meal-Info/meal-information";
import Ingredients from "../components/Meal-Info/ingredient";
import Appliances from "../components/Meal-Info/appliances";
import useFetch from "../hooks/useFetch";

const Profile = () => {
  const router = useRouter();
  const { state: mealInfo } = useFetch(
    "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
  );

  if (!mealInfo) {
    return null;
  }
  return (
    <View
      style={{
        position: "relative",
        backgroundColor: "#ffffff",
        height: "100%",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          borderTopColor: "#F2F2F2",
          borderTopWidth: 3,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Topbar text={""} />
        </Pressable>

        <AbsoluteImages />
        {mealInfo && (
          <MealInformation name={mealInfo.name} time={mealInfo.timeToPrepare} />
        )}

        <View style={style.mealInfo}>
          <View style={style.section}>
            <View style={style.ingredientHeading}>
              <Heading text={"Ingredients"} />
              <Text style={style.forPeople}>For 2 people</Text>
            </View>

            <View style={style.line}></View>

            <View style={style.ingredientFlex}>
              <Ingredients
                heading={`Vegetables (${String(
                  mealInfo.ingredients.vegetables.length
                ).padStart(2, "0")})`}
                ingredientUsed={mealInfo.ingredients.vegetables}
              />

              <Ingredients
                heading={`Spices (${String(
                  mealInfo.ingredients.spices.length
                ).padStart(2, "0")})`}
                ingredientUsed={mealInfo.ingredients.spices}
              />

              <View style={style.appliances}>
                <Heading text={"Appliances"} />
                <Appliances appliances={mealInfo.ingredients.appliances} />
              </View>
            </View>
          </View>
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  mealInfo: {
    borderTopWidth: 3,
    borderColor: "#F2F2F2",
  },
  section: {
    marginHorizontal: 24,
    paddingVertical: 22,
  },
  ingredientHeading: {
    display: "flex",
    gap: 4,
  },
  forPeople: {
    fontSize: 8,
    color: "#8A8A8A",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#D6D6D6CE",
    marginVertical: 16,
  },
  subFlex: {
    display: "flex",
    gap: 8,
  },
  ingredientFlex: {
    display: "flex",
    gap: 24,
  },
  appliances: {
    display: "flex",
    gap: 16,
  },
});

export default Profile;
