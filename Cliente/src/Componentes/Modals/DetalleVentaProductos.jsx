import React from 'react';
import DataTable from "react-data-table-component";

export default function DetalleVentaProductos({ data }) {
  const productoData = [
    {
      id: 1,
      producto: "Producto 1",
      cantidad: 2,
      precio: 25,
    },
    {
      id: 2,
      producto: "Producto 2",
      cantidad: 1,
      precio: 25,
    },
  ];

  const columns = [
    {
      name: "Producto",
      selector: (row) => row.producto,
      sortable: true,
      center: true,
    },
    {
      name: "Cantidad",
      selector: (row) => row.cantidad,
      sortable: true,
      center: true,
    },
    {
      name: "Precio",
      selector: (row) => `$${row.precio}`,
      sortable: true,
      center: true,
    },
  ];

  return (
    <>
      <h2>Detalles de la Venta para </h2>
      <DataTable
       
      />
      <div>
        <h3>Lugar de destino</h3>
        <p>{data.lugarDestino || "No especificado"}</p>
      </div>
    </>
  );
}
