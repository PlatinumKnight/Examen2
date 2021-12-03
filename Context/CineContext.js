import React, { createContext, useState } from "react";
import { Alert } from "react-native";

export const CineContext = createContext();

const CineProvider = (props) => {
  const [compra, setCompra] = useState({});
  const [cartelera, setCartelera] = useState([
    {
      codigo: 1,
      nombre: "Halloween Kills",
      idioma: "SUB",
      clasificacion: "C",
      horarios: ["13:00", "17:50", "20:30"],
      duracion: "106 min",
      url: "https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg",
    },
    {
      codigo: 2,
      nombre: "Los Locos Addams 2",
      idioma: "ESP",
      clasificacion: "A",
      horarios: ["9:00", "11:30", "13:30"],
      duracion: "93 min",
      url: "https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg",
    },
    {
      codigo: 3,
      nombre: "Sin Tiempo Para Morir",
      idioma: "ESP",
      clasificacion: "B",
      horarios: ["11:00", "13:50", "19:40"],
      duracion: "164 min",
      url: "https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg",
    },
    {
      codigo: 4,
      nombre: "Venom: Carnage Liberado",
      idioma: "ESP",
      clasificacion: "B",
      horarios: ["10:30", "14:20", "18:30"],
      duracion: "98 min",
      url: "https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg",
    },
  ]);
  const agregar = (e, horario) => {
    let precio;
    if (e.clasificacion === "A") precio = 50;
    if (e.clasificacion === "B") precio = 80;
    if (e.clasificacion === "C") precio = 95;
    const temp = {
      codigo: e.codigo,
      nombre: e.nombre,
      idioma: e.idioma,
      clasificacion: e.clasificacion,
      horario: horario,
      precio: precio,
      cantidad: 0,
      duracion: e.duracion,
      total: 0,
    };
    setCompra(temp);
  };

  const calcular = (cant, pelicula) => {
    let precio;
    if (pelicula.clasificacion === "A") precio = 50;
    if (pelicula.clasificacion === "B") precio = 80;
    if (pelicula.clasificacion === "C") precio = 95;

    const temporal = {
      codigo: pelicula.codigo,
      nombre: pelicula.nombre,
      idioma: pelicula.idioma,
      clasificacion: pelicula.clasificacion,
      horario: pelicula.horario,
      precio: precio,
      cantidad: cant,
      duracion: pelicula.duracion,
      total: cant * precio,
    };

    setCompra(temporal);
  };

  const eliminarCompra = () => {
    setCompra({});
  };

  const comprar = (pelicula) => {
    if (pelicula.cantidad == 0) {
      Alert.alert("No ha agregado ninguna cantidad al carrito");
    } else {
      Alert.alert("Gracias por tu compra");
      setCompra({});
    }
  };

  return (
    <CineContext.Provider
      value={{ cartelera, agregar, compra, calcular, eliminarCompra, comprar }}
    >
      {props.children}
    </CineContext.Provider>
  );
};

export default CineProvider;
