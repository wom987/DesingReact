import React from "react";
import { Text, View, ImageBackground, FlatList } from "react-native";
import Styles from "../Util";
import Componente from "../Componente";
const dataShow = [
  {
    title: "Carne de pulpo",
    description: "Carne de pulpo fresca para toda la Familia",
    price: 99.99,
  },
  {
    title: "Coctel de conchas",
    description: "trae cebolla y cerveza",
    price: 59.99,
  },
  {
    title: "Camaron asado",
    description: "Recien pescado",
    price: 29.99,
  },
  {
    title: "Carne de Leviatan",
    description: "Importado desde china",
    price: 19.99,
  },
  {
    title: "Encebollada",
    description: "Carne de pez globo con Cebolla",
    price: 59.99,
  },
  {
    title: "Carne de perico",
    description: "Carne de perico 100% natural",
    price: 29.99,
  },
];
const Mariscos = () => {
  return (
    <View style={Styles.containerScreen}>
      <ImageBackground
        style={Styles.banner}
        resizeMode="stretch"
        source={require("../../assets/sea.jpg")}
      ></ImageBackground>
      <View style={Styles.header}>
        <Text style={Styles.headerTitle}>Nuestros mariscos</Text>
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
              source={"marisco"}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Mariscos;
