import React from "react";
import { Text, View, ImageBackground, FlatList } from "react-native";
import Styles from "../Util";
import Componente from "../Componente";
const dataShow = [
  {
    title: "Ensalada Romana",
    description: "Recien hecha y fresca para toda la Familia",
    price: 99.99,
  },
  {
    title: "Coctel de Venceia",
    description: "trae cebolla y cerveza incluida",
    price: 59.99,
  },
  {
    title: "Berengena Asada",
    description: "Recien Hecha",
    price: 29.99,
  },
  {
    title: "Ensalada Romada",
    description: "Recien hecha y fresca para toda la Familia",
    price: 99.99,
  },
  {
    title: "Coctel de Venceia",
    description: "trae cebolla y cerveza incluida",
    price: 59.99,
  },
  {
    title: "Berengena Asada",
    description: "Recien Hecha",
    price: 29.99,
  },
];
const Ensalada = () => {
  return (
    <View style={Styles.containerScreen}>
      <ImageBackground
        style={Styles.banner}
        resizeMode="stretch"
        source={require("../../assets/salad.jpg")}
      ></ImageBackground>
      <View style={Styles.header}>
        <Text style={Styles.headerTitle}>Nuestras Ensaladas</Text>
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
              source={"ensalada"}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Ensalada;
