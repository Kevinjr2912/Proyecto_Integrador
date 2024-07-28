import React, { useState, useEffect } from 'react';
import DataTable from "react-data-table-component";

export default function DetalleVentaProductos({ data }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(`/api/productos/${data.id}`);
        if (!response.ok) {
          throw new Error('Error en la carga de datos');
        }
        const result = await response.json();
        setProductos(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [data.id]);

  // Columnas para la tabla de productos
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

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h2>Detalles de la Venta para {data.email}</h2>
      <DataTable
        columns={columns}
        data={productos}
        pagination
        paginationPerPage={5}
        fixedHeader
      />
      <div>
        <h3>Lugar de destino</h3>
        <p>{data.lugarDestino || "No especificado"}</p>
      </div>
    </>
  );
}
