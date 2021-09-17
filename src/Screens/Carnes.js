import React from "react";
import { Text, View, ImageBackground, FlatList } from "react-native";
import Styles from "../Util";
import Componente from "../Componente";
const dataShow = [
  {
    title: "Carne Asada",
    description: "Carne fresca para toda la Familia",
    price: 99.99,
  },
  {
    title: "Carne Encebollada",
    description: "Carne con Cebolla",
    price: 59.99,
  },
  {
    title: "Carne de cerdo",
    description: "Carne de cerdo 100% natural",
    price: 29.99,
  },
  {
    title: "Carne Asada",
    description: "Carne fresca para toda la Familia",
    price: 99.99,
  },
  {
    title: "Carne Encebollada",
    description: "Carne con Cebolla",
    price: 59.99,
  },
  {
    title: "Carne de cerdo",
    description: "Carne de cerdo 100% natural",
    price: 29.99,
  },
];
const Carnes = () => {
  return (
    <View style={Styles.containerScreen}>
      <ImageBackground
        style={Styles.banner}
        resizeMode="stretch"
        source={require("../../assets/meet.jpg")}
      ></ImageBackground>
      <View style={Styles.header}>
        <Text style={Styles.headerTitle}>Nuestra carnes</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={Styles.flatListItem}
        keyExtractor={(item, index) => index.toString()}
        data={dataShow}
        renderItem={({ item }) => (
          <View>
            <Componente
              title={item.title}
              description={item.description}
              price={item.price}
              source={"carne"}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Carnes;
