import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function DetalleVentaProductos({ data }) {
  const [productos, setProductos] = useState([]);
  const [customerAddress, setCustomerAddress] = useState({});
  const token = localStorage.getItem('token');

  const handleDetails = async () => {
    try {
      const [response1, response2] = await Promise.all([
        fetch(`http://localhost:3000/sales/getDetailsOrder/${data.idPedido}`,{
              headers: {
            'Authorization': `Bearer ${token}`
          }
        }),
        fetch(`http://localhost:3000/sales/shippingDetail/${data.idPedido}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }),
      ]);

      if (response1.ok && response2.ok) {
        const data1 = await response1.json();
        const listProducts = data1.map((product) => ({
          producto: product.nombre,
          cantidad: product.cantidad,
          precio: product.precio,
        }));
        const data2 = await response2.json();
        console.log(data2);
        setCustomerAddress(data2);
        setProductos(listProducts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate('/loginUsuario');
      return;
    }
    handleDetails();
  }, []);

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
      selector: (row) => {row.precio},
      sortable: true,
      center: true,
    },
  ];

  console.log(customerAddress);
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
        <div>
          <h3>Lugar de destino</h3>
          {customerAddress.codigoPostal ? (
            <p>
              {customerAddress.codigoPostal} {customerAddress.estado}{" "}
              {customerAddress.municipio} {customerAddress.colonia}{" "}
              {customerAddress.calle} {customerAddress.numeroExterior}{" "}
              {customerAddress.referencia}
            </p>
          ) : (
            <p>Cargando datos de envío...</p>
          )}
        </div>
      </div>
    </>
  );
}