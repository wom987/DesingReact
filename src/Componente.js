import React from "react";
import { Image, Text, View } from "react-native";
import Styles from "./Util";

const Componente = (props) => {
  return (
    <View style={Styles.itemScreem}>
      <Image
        source={
          props.source == "carne"
            ? require("../assets/meet1.jpg")
            : props.source == "bebida"
            ? require("../assets/drink.jpg")
            : props.source == "ensalada"
            ? require("../assets/ensala.jpg")
            : require("../assets/fish.jpg")
        }
        style={{ width: 100, height: 100, margin: 5 }}
      ></Image>
      <Text style={Styles.textItemScren}>
        <Text style={Styles.textTitleItemScren}>{props.title}</Text>
        {"\n"}
        <Text style={Styles.textDescriptionItemScren}>{props.description}</Text>
      </Text>
      <Text style={Styles.textItemPriceScren}>${props.price}</Text>
    </View>
  );
};

export default Componente;
