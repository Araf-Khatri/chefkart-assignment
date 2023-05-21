import { View, StyleSheet, Text, ImageBackground } from "react-native";

const popularDishes = ({ name, image }) => {
  return (
    <View>
      <View style={style.popularDish}>
        <ImageBackground
          style={style.Img}

          src={image}
          alt={`${name} image`}
        />
        <View style={style.overlay} />
        <Text style={{ fontSize: 11, color: "#ffffff" }}>{name}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  notSeenBorder: {
    borderWidth: 1,
    borderColor: "#FF941A",
    borderRadius: 1000,
  },
  popularDish: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 58,
    height: 58,
    overflow: "hidden",
    borderWidth: 1,
    backgroundColor: "#1c1c1c",
    borderColor: "#ffffff",
    borderRadius: 500,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Customize the color and opacity here
  },
  Img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default popularDishes;
