import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

var currentYear = new Date().getFullYear();

function App() {

  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50},
    { id: 2, nombre: 'Camisa VueJS', precio: 45},
    { id: 3, nombre: 'Camisa NodeJS', precio: 80},
    { id: 4, nombre: 'Camisa AngularJS', precio: 30},
  ]);
  
  const [ carrito, agregarProducto] = useState([]);

  return (
    <Fragment>
      <Header 
      titulo = 'Mi primer aplicación React'
      />
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
          key = {producto.id}
          producto = {producto}
          carrito = {carrito}
          productos = {productos}
          agregarProducto = {agregarProducto}
        />
      ))}
      <Carrito 
      carrito={carrito}
      agregarProducto={agregarProducto}
      />
      <Footer 
      fecha = {currentYear}
      />
      </Fragment>
  );
}

export default App;
