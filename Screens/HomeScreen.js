import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Card, Header } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { CineContext } from "../Context/CineContext";

const HomeScreen = ({ navigation }) => {
  const { cartelera, agregar } = useContext(CineContext);

  return (
    <ScrollView>
      <View style={styles.Back}>
        <Header style={styles.Header}>
          <Text style={styles.Text}>CineFox</Text>
        </Header>
        <Card style={styles.Card}>
          {cartelera.map((e, f) => {
            return (
              <View key={f}>
                <Text>{e.nombre}</Text>
                <Image
                  style={styles.imagen}
                  source={{
                    uri: `${e.url}`,
                  }}
                />
                <Text>{e.clasificacion}</Text>
                <Text>{e.idioma}</Text>
                {e.horarios.map((a, i) => {
                  return (
                    <Button
                      onPress={() => {
                        agregar(e, i);
                        navigation.navigate("Pantallas");
                      }}
                      key={i}
                      title={a}
                    />
                  );
                })}
              </View>
            );
          })}
        </Card>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  Header: {
    height: 60,
    padding: 1,
    backgroundColor: "darkslateblue",
  },
  Text: {
    color: "#fff",
    textAlign: "center",
  },
  Card: {
    flex: 1,
    margin: 50,
    backgroundColor: "#fff",
    backgroundColor: "#000000a0",
  },
  imagen: {
    height: 50,
    width: 50,
  },
});
