import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import COLORS from "../consts/colors";

const OnBoardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/onboardImage.jpg")}
      >
        <View style={styles.detail}>
          <Text style={styles.detailTitle}>Discover</Text>
          <Text style={styles.detailTitle}>world with us</Text>
          <Text style={styles.detailText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            voluptate incidunt? Hic qui ducimus quis vero fuga repellendus nulla
            debitis quas esse numquam. Cumque, ut.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  detail: {
    height: "50%",
    bottom: 0,
    position: "absolute",
    paddingHorizontal: 40,
  },
  detailTitle: {
    color: COLORS.white,
    fontSize: 35,
    fontWeight: "bold",
  },
  detailText: {
    color: COLORS.white,
    lineHeight: 25,
    marginTop: 15,
    fontSize: 20,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btnText: {
    color: COLORS.dark,
    fontWeight: "bold",
  },
});
