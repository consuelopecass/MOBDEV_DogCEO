import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  //declaracion de states
  const [dataApi, setDataApi] = useState([]);
  const [dataSubRaza, setDataSubRaza] = useState([]);
  const [razaSeleccionada, setRazaSeleccionada] = useState("");
  const [SubRazaSeleccionada, setSubRazaSeleccionada] = useState("");
  const [imagen, setImagenes] = useState("");

  const obtenerRazas = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/list/all");
    const razas = await data.json();
    //console.log(razas);
    setDataApi(razas.message);
  };

  const obtenerImagenes = async () => {
    const data = await fetch(
      `https://dog.ceo/api/breed/${razaSeleccionada}/${SubRazaSeleccionada}/images`
    );
    const imagenes = await data.json();
    console.log("linea 25 trae las imagenes");
    console.log(imagenes);
    setImagenes(imagenes.message);
  };

  useEffect(() => {
    obtenerRazas();
  }, []);

  //console.log(dataApi[razaSeleccionada]);

  return (
    <div className="container">
      <select
        onChange={(seleccion) => {
          setRazaSeleccionada(seleccion.target.value);
        }}
        className="form-control my-5"
      >
        {Object.keys(dataApi).map((item) => (
          <option>{item}</option>
        ))}
      </select>
      <select
        onChange={(seleccionSubraza) => {
          setSubRazaSeleccionada(seleccionSubraza.target.value);
        }}
        className="form-control my-5"
      >
        {!dataApi[razaSeleccionada] ||
          (dataApi[razaSeleccionada].length <= 0 ? (
            <option>NO HAY SUBRAZA</option>
          ) : (
            dataApi[razaSeleccionada].map((item) => <option>{item}</option>)
          ))}
      </select>
      <button
        className="btn btn-success d-block mx-auto"
        onClick={obtenerImagenes}
      >
        Perrito
      </button>

      {/* {" "}
      <button
        onClick={() => {
          if (setRazaSeleccionada && setSubRazaSeleccionada) {
            obtenerImagenes(
              `https://dog.ceo/api/breed/${razaSeleccionada}/${SubRazaSeleccionada}/images/random/6`
            );
          } else if (setRazaSeleccionada && !setSubRazaSeleccionada) {
            obtenerImagenes(
              `https://dog.ceo/api/breed/${razaSeleccionada}/images/random/6`
            );
          } else console.log("hola aca va el error");
        }}
      >
        {" "}
        perro{" "}
      </button> */}
    </div>
  );
};

export default Cards;
