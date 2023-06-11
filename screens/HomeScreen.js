import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../consts/colors";
import { MaterialIcons } from "@expo/vector-icons";
import places from "../consts/places";
const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const categoryIcons = [
    <MaterialIcons name="flight" size={25} color={COLORS.primary} />,
    <MaterialIcons name="beach-access" size={25} color={COLORS.primary} />,
    <MaterialIcons name="near-me" size={25} color={COLORS.primary} />,
    <MaterialIcons name="place" size={25} color={COLORS.primary} />,
  ];

  const ListCategories = () => {
    return (
      <View style={styles.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={styles.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const Card = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", place)}
      >
        <ImageBackground style={styles.cardImage} source={place.image}>
          <Text style={styles.placeTitle}>{place.name}</Text>
          <View style={styles.placeIconContainer}>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="place" size={20} color={COLORS.white} />
              <Text style={styles.locationText}>{place.location}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="star" size={20} color={COLORS.white} />
              <Text style={styles.locationText}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const RecommendedCard = ({ place }) => {
    return (
      <ImageBackground style={styles.rmCardImage} source={place.image}>
        <Text style={styles.placeTitle}>{place.name}</Text>
        <View style={styles.rmCardContainer}>
          <View style={styles.rmCardIconContainer}>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="place" size={22} color={COLORS.white} />
              <Text style={{ color: COLORS.white, marginLeft: 5 }}>
                {place.location}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="star" size={22} color={COLORS.white} />
              <Text style={{ color: COLORS.white, marginLeft: 5 }}>5.0</Text>
            </View>
          </View>
          <Text style={{ color: COLORS.white, fontSize: 13 }}>
            {place.details}
          </Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={styles.header}>
        <MaterialIcons name="sort" size={28} color={COLORS.white} />
        <MaterialIcons
          name="notifications-none"
          size={28}
          color={COLORS.white}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.headerTitle}>Explore the</Text>
            <Text style={styles.headerTitle}>beautiful places</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="search" size={28} />
              <TextInput
                placeholder="Search place"
                style={styles.inputText}
              ></TextInput>
            </View>
          </View>
        </View>
        <ListCategories />
        <Text style={styles.sectionTitle}>Places</Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <Card place={item} />}
          />
          <Text style={styles.sectionTitle}>Recommended</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <RecommendedCard place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  headerContainer: {
    backgroundColor: COLORS.primary,
    height: 120,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 12,
  },
  inputText: {
    color: COLORS.grey,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  placeTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
  placeIconContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  locationText: {
    marginLeft: 5,
    color: COLORS.white,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  rmCardContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  rmCardIconContainer: { width: "100%", flexDirection: "row", marginTop: 10 },
});
