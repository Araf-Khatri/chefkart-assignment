import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import DateTime from "../components/Meals-Section/date-time";
import DishesType from "../components/Meals-Section/dishes-type";
import LeftArrow from "../assets/icons/left-arrow";
import PopularDish from "../components/Meals-Section/popular-dish";
import MealsSection from "../layouts/meals-section";
import SelectedItems from "../components/Meals-Section/selected-items";
import Topbar from "../components/topbar";
import useFetch from "../hooks/useFetch";

const dishesType = [
  { id: 1, type: "Italian", active: true },
  { id: 2, type: "India", active: false },
  { id: 3, type: "Chinese", active: false },
  { id: 11, type: "Italian", active: false },
  { id: 22, type: "India", active: false },
  { id: 33, type: "Chinese", active: false },
];

const Home = () => {
  const { state: meals } = useFetch(
    "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
  );
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <Topbar text={"Select Dishes"} />

      <View style={style.blackBg}></View>

      <View
        style={[
          style.main,
          {
            width: screenWidth,
          },
        ]}
      >
        <View
          style={[
            style.section,
            {
              height: 90,
            },
          ]}
        >
          <DateTime />
          <ScrollView
            horizontal={true}
            contentContainerStyle={style.dishesType}
          >
            {dishesType.map(({ id, type, active }) => (
              <DishesType key={id} id={id} type={type} active={active} />
            ))}
          </ScrollView>
        </View>
        <View
          style={[
            style.section,
            {
              justifyContent: "flex-start",
              gap: 15,
              paddingBottom: 18,
            },
          ]}
        >
          <Text style={style.PDHeading}>Popular Dishes</Text>
          <ScrollView horizontal={true}>
            <View style={style.popularDishes}>
              {meals &&
                meals.popularDishes.map(({ id, name, image }) => (
                  <PopularDish key={id} name={name} image={image} />
                ))}
            </View>
          </ScrollView>
        </View>
      </View>

      {meals && <MealsSection dishes={meals.dishes} />}

      <SelectedItems />
    </View>
  );
};

const style = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  ////////////////////////////////////////
  topbar: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
    padding: 16,
    color: "#1c1c1c",
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: 16,
    fontWeight: 600,
  },

  ////////////////////////////////////////
  blackBg: {
    width: "100%",
    height: 42,
    backgroundColor: "#1c1c1c",
  },

  ////////////////////////////////////////
  main: {
    // position: "relative",
    display: "flex",
    gap: 10,
    // justifyContent: "center",
    // alignItems: "center",
  },

  ////////////////////////////////////////
  dishesType: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    fontSize: 10,
    paddingHorizontal: 24,
  },
  ////////////////////////////////////////
  // Popular dishes
  PDHeading: {
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "flex-start",
    marginHorizontal: 24,
  },
  popularDishes: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 24,
  },
});

export default Home;
