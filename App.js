import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.banner}
        resizeMode="stretch"
        source={require("./assets/banner.png")}
      >
      </ImageBackground>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nuestra carta</Text>
      </View>
      <View style={styles.products}>
      <View style={styles.optionsContainer}>
        <View style={styles.element}>
          <Image source={require('./assets/carne.jpg')} style={styles.image}></Image>
          <Text style={styles.imageText}>Carnes</Text>
        </View>
        <View style={styles.element}>
        <Image source={require('./assets/mariscos.jpg')} style={styles.image}></Image>
          <Text style={styles.imageText}>Mariscos</Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.element}>
        <Image source={require('./assets/ensalada.jpg')} style={styles.image}></Image>
          <Text style={styles.imageText}>Ensalada</Text>
        </View>
        <View style={styles.element}>
        <Image source={require('./assets/bebida.jpg')} style={styles.image}></Image>
          <Text style={styles.imageText}>Bebidas</Text>
        </View>
        
      </View>
      <Text style={{fontWeight:'bold'}}>Wilmar Otoniel Osorio Majano Carnet: 152416</Text>
      </View>
      
      <View style={styles.footer}>
        <Text style={{fontWeight:'bold'}}>Wilmar Otoniel Osorio Majano Carnet: 152416</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffa500",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: "1%",
    marginRight: "1%",
    width: "98%",
    height: 180,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  header: {
    margin: "6%",
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: "bold",
  },
  optionsContainer: {
    flexDirection: "row",
  },
  element: {
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 10,
    height: 210,
    width: 190,
    
  },
  footer: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    backgroundColor:"#ffffd3",
  },image:{
    width:180,
    height:180,
    borderRadius:30
  },imageText:{
    fontSize:25
  }
  ,products:{
    height:"65%",
    paddingBottom:"1%",
    backgroundColor:"#ffffd3",
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    alignItems: "center",
    justifyContent: "center",
  }
});
