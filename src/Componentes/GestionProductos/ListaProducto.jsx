import React from "react";
import TablaProducto from "../GestionProductos/TablaProducto";
import "../../Estilos/ListaProducto.css";

const ListaProducto = ({ products }) => {
  return (
    <div className="container-main">
      <div className="tabla">
        <TablaProducto products={products} />
      </div>
    </div>
  );
};

export default ListaProducto;
