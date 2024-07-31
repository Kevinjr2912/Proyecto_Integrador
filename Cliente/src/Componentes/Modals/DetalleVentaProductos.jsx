import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function DetalleVentaProductos({ data }) {
  const [productos, setProductos] = useState([]);
  const [customerAddress, setCustomerAddress] = useState({});
  const navigate = useNavigate();

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "No estás autenticado",
        text: "Por favor, inicia sesión para continuar.",
      }).then(() => {
        navigate("/loginAdmin");
      });
      return;
    }

    const handleDetails = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch(`http://localhost:3000/sales/getDetailsOrder/${data.idPedido}`, {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch(`http://localhost:3000/sales/shippingDetail/${data.idPedido}`, {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
        ]);

        if (response1.status === 401 || response2.status === 401) {
          // Token expirado o no autorizado
          Swal.fire({
            icon: "warning",
            title: "Sesión expirada",
            text: "Tu sesión ha expirado. Por favor, inicia sesión nuevamente.",
          }).then(() => {
            localStorage.removeItem("jwtToken"); // Elimina el token del almacenamiento local
            navigate("/loginAdmin"); // Redirige a la página de inicio de sesión
          });
          return;
        }

        if (response1.ok && response2.ok) {
          const data1 = await response1.json();
          const listProducts = data1.map((product) => ({
            producto: product.nombre,
            cantidad: product.cantidad,
            precio: product.precio,
          }));
          const data2 = await response2.json();
          setCustomerAddress(data2);
          setProductos(listProducts);
        } else {
          // Maneja otros errores de respuesta
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudieron obtener los detalles.",
          });
        }
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al obtener los detalles.",
        });
      }
    };

    handleDetails();
  }, [data, token, navigate]);

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
