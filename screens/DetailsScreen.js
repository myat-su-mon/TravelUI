import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import COLORS from "../consts/colors";
import { MaterialIcons } from "@expo/vector-icons";

const DetailsScreen = ({ navigation, route }) => {
  const place = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{ flex: 0.7 }} source={place.image}>
        <View style={styles.header}>
          <MaterialIcons
            name="arrow-left"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
        </View>
        <View style={styles.imageDetails}>
          <Text style={styles.placeTitle}>{place.name}</Text>
          <View>
            <MaterialIcons name="star" size={30} color={COLORS.o} />
            <Text style={styles.rating}>5.0</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="favorite" color={COLORS.red} size={30} />
        </View>
        <View style={styles.locationContainer}>
          <MaterialIcons name="place" color={COLORS.primary} size={28} />
          <Text style={styles.locationText}>{place.location}</Text>
        </View>
        <Text style={styles.aboutTitle}> About the trip</Text>
        <Text style={styles.aboutText}>{place.details}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <Text style={styles.priceText}>$100</Text>
          <Text style={styles.perDayText}>/Per Day</Text>
        </View>
        <View style={styles.bookNowBtn}>
          <Text style={styles.bookNowText}>Book Now</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
  placeTitle: {
    width: "70%",
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 20,
  },
  rating: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 20,
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3, // ???
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: "absolute",
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  locationContainer: { flexDirection: "row", marginTop: 10 },
  locationText: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  aboutTitle: { marginTop: 20, fontWeight: "bold", fontSize: 20 },
  aboutText: {
    marginTop: 20,
    lineHeight: 22,
  },
  footer: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  footerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: { fontSize: 18, fontWeight: "bold", color: COLORS.white },
  perDayText: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.grey,
    marginLeft: 2,
  },
  bookNowBtn: {
    width: 150,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  bookNowText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});
