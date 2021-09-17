import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View, ImageBackground, Pressable } from "react-native";
import Styles from "../Util";

export default function Home({navigation}) {
  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.banner}
        resizeMode="stretch"
        source={require("../../assets/banner.png")}
      ></ImageBackground>
      <View style={Styles.header}>
        <Text style={Styles.headerTitle}>Nuestra carta</Text>
      </View>
      <View style={Styles.products}>
        <View style={Styles.optionsContainer}>
          <View style={Styles.element}>
            <Pressable
              android_ripple={{ color: "#ffff00" }}
              onPress={() => {
                navigation.navigate("Carnes");
              }}
            >
              <Image
                source={require("../../assets/carne.jpg")}
                style={Styles.image}
              ></Image>
              <Text style={Styles.imageText}>Carnes</Text>
            </Pressable>
          </View>
          <View style={Styles.element}>
            <Pressable
              android_ripple={{ color: "#ffff00" }}
              onPress={() => {
                navigation.navigate("Mariscos");
              }}
            >
              <Image
                source={require("../../assets/mariscos.jpg")}
                style={Styles.image}
              ></Image>
              <Text style={Styles.imageText}>Mariscos</Text>
            </Pressable>
          </View>
        </View>
        <View style={Styles.optionsContainer}>
          <View style={Styles.element}>
            <Pressable
              android_ripple={{ color: "#ffff00" }}
              onPress={() => {
                navigation.navigate("Ensaladas");
              }}
            >
              <Image
                source={require("../../assets/ensalada.jpg")}
                style={Styles.image}
              ></Image>
              <Text style={Styles.imageText}>Ensalada</Text>
            </Pressable>
          </View>
          <View style={Styles.element}>
            <Pressable
              android_ripple={{ color: "#ffff00" }}
              onPress={() => {
                navigation.navigate("Bebidas");
              }}
            >
              <Image
                source={require("../../assets/bebida.jpg")}
                style={Styles.image}
              ></Image>
              <Text style={Styles.imageText}>Bebidas</Text>
            </Pressable>
          </View>
        </View>
        <Text style={{ fontWeight: "bold" }}>
          Wilmar Otoniel Osorio Majano Carnet: 152416
        </Text>
      </View>

      <View style={Styles.footer}>
        <Text style={{ fontWeight: "bold" }}>
          Wilmar Otoniel Osorio Majano Carnet: 152416
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
