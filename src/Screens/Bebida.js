import React from "react";
import { Text, View, ImageBackground, FlatList } from "react-native";
import Styles from "../Util";
import Componente from "../Componente";
const dataShow = [
  {
    title: "Pilsener",
    description: "Recien sacada y fresca para todos ",
    price: 99.99,
  },
  {
    title: "Horchata",
    description: "trae cebolla y boquitas incluida",
    price: 59.99,
  },
  {
    title: "Jugos Naturales",
    description: "Recien sacada con regalo",
    price: 29.99,
  },
  {
    title: "Corona",
    description: "Recien sacada y con limones",
    price: 99.99,
  },
  {
    title: "Golden",
    description: "Recien sacada y con stickers",
    price: 59.99,
  },
  {
    title: "Tequila",
    description: "Recien sacada y con tomate",
    price: 29.99,
  },
];
const Bebida = () => {
  return (
    <View style={Styles.containerScreen}>
      <ImageBackground
        style={Styles.banner}
        resizeMode="stretch"
        source={require("../../assets/drinks.jpg")}
      ></ImageBackground>
      <View style={Styles.header}>
        <Text style={Styles.headerTitle}>Nuestras Bebidas</Text>
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
              source={"bebida"}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Bebida;
