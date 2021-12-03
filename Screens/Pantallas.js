import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Card } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { CineContext } from "../Context/CineContext";

const Pantallas = ({ navigation }) => {
  const { compra, calcular, eliminarCompra, comprar } = useContext(CineContext);
  const { nombre, idioma, precio, total } = compra;
  return (
    <View>
      <Card style={styles.Card}>
        <Text>
          {nombre}
          <Text>{idioma}</Text>
        </Text>
        <Text>Precio: ${precio}.00</Text>
        <SafeAreaView>
          <View>
            <Text>Cantidad:</Text>
            <TextInput
              onChangeText={(e) => {
                calcular(e, compra);
              }}
              maxLength={40}
              placeholder="..."
              keyboardType="numeric"
            />
          </View>
        </SafeAreaView>
        <Text>Total: ${total}.00</Text>
        <View>
          <Button
            color={"#ff0000"}
            title="Cancelar"
            onPress={() => (eliminarCompra(), navigation.goBack())}
          />
        </View>
        <View>
          <Button
            color={"#008000"}
            title="Comprar"
            onPress={() => {
              comprar(compra), navigation.goBack();
            }}
          />
        </View>
      </Card>
    </View>
  );
};

export default Pantallas;

const styles = StyleSheet.create({
  Card: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    backgroundColor: "#000000a0",
  },
});
