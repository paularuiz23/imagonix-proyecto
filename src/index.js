import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//Components
import Menu from "./components/Menu";
import Caja from "./components/CajaPrincipal";
import Descripcion from "./components/Description";
import Beneficios from "./components/Beneficios";
import Carrusel from "./components/Carrusel";
import Calificacion from "./components/Calificacion";
import Descuento from "./components/Descuento";
import Derechos from "./components/Derechos";


ReactDOM.render(
  <React.StrictMode>
    <>
    <Menu />
    <Caja />
    <Descripcion />
    <Beneficios />
    <Carrusel />
    <Calificacion />
    <Descuento />
    <Derechos />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
