import React from 'react'

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const {id, precio, nombre } = producto;

    //Agregar producto al carrito
    const seleccionarProducto = id => {
        console.log("Comprando "+id);
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
    }
    //Eliminar un producto del carrito
    const eliminarProducto = (id) => {
        var productos = carrito.filter(producto => producto.id !== id);
        //Colocar productos dentro del state.
        agregarProducto(productos);
    }

    return(

        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>

            {productos
            ?(
                <button
            type="button"
            onClick={()=> seleccionarProducto(id)} >
                Comprar
            </button>
            )
            :(
                <button
            type="button"
            onClick={()=> eliminarProducto(id)} >
                Eliminar
            </button>
            )
            }
        </div>

    )
}

export default Producto;