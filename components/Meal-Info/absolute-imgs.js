import { Fragment } from "react";
import { View, Image, StyleSheet } from "react-native";

import bowl from "./../../assets/images/bowl.png";
import vegetable from "./../../assets/images/vegetable.png";

const AbsoluteImages = () => {
  return (
    <Fragment>
      <View style={style.bgCircle}></View>
      <Image style={[style.vegetables, style.vegetable]} source={vegetable} />
      <Image style={[style.vegetables, style.bowl]} source={bowl} />
    </Fragment>
  );
};

const style = StyleSheet.create({
  bgCircle: {
    position: "absolute",
    top: 25,
    right: -25,
    width: 192,
    height: 192,
    backgroundColor: "#FFF9F2",
    borderRadius: 500,
  },
  vegetables: {
    position: "absolute",
    zIndex: 100,
    top: 60,
  },
  vegetable: {
    top: 100,
    right: -190,
    width: 380,
    height: 140,
  },
  bowl: {
    right: -120,
    width: 215,
    height: 215,
  },
});

export default AbsoluteImages;
