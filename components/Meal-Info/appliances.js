import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import regrigeratorImg from "./../../assets/images/refrigerator.png";

const Appliances = ({ appliances }) => {
  return (
    <ScrollView horizontal={true}>
      <View style={style.applianceBox}>
        {!!appliances?.length &&
          appliances.map(({ name }, idx) => (
            <View key={idx} style={style.appliancesItem}>
              <Image source={regrigeratorImg} />
              <Text>{name}</Text>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  appliances: {
    display: "flex",
    gap: 16,
  },
  appliancesItem: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    padding: 14,
    backgroundColor: "#F5F5F5",
    borderRadius: 7,
  },
  applianceBox: {
    display: "flex",
    flexDirection: "row",
    gap: 21,
  },
  appliancesImg: {
    width: 30,
    height: 55,
  },
  appliancesText: {
    fontSize: 8,
  },
});

export default Appliances;
