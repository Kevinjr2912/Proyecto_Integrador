import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import styles from "../../Estilos/DetalleVenta.module.css";
import FrameOjo from "../../Icons/FrameOjo.svg";
import FrameRecibo from "../../Icons/FrameRecibo.svg";
import FrameConfirmar from "../../Icons/FrameConfirmar.svg";
import FrameCancelar from "../../Icons/FrameCancelar.svg";
import FrameEnvio from "../../Icons/FrameEnvio.svg";
import DetalleVentaProductos from "../Modals/DetalleVentaProductos";
import LinkProducto from "../Modals/LinkProducto";
import ReciboProducto from "../Modals/ReciboProducto";

// Componente para botones
const Button = ({ onClick, icon, altText, style }) => (
  <button onClick={onClick} className={style}>
    <img src={icon} alt={altText} />
  </button>
);

// Estilos personalizados para la tabla
const customStyles = {
  rows: {
    style: {
      backgroundColor: "#1e1e1e",
      color: "#ffffff",
    },
  },
  headCells: {
    style: {
      backgroundColor: "#333333",
      color: "#ffffff",
    },
  },
  cells: {
    style: {
      backgroundColor: "#1e1e1e",
      color: "#ffffff",
    },
  },
  pagination: {
    style: {
      backgroundColor: "#1e1e1e",
      color: "#ffffff",
    },
  },
};

// Componente principal de DetalleVenta
export default function DetalleVenta() {
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showReciboModal, setShowReciboModal] = useState(false);
  const navigate = useNavigate();

  // Obtén el token desde el almacenamiento local
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        Swal.fire({
          icon: "warning",
          title: "No estás autenticado",
          text: "Por favor, inicia sesión para acceder a esta información.",
        }).then(() => {
          navigate('/loginAdmin');
        });
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/sales/getInformationSale", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 401) {
          // Token expirado o no autorizado
          Swal.fire({
            icon: "warning",
            title: "Sesión expirada",
            text: "Tu sesión ha expirado. Por favor, inicia sesión nuevamente.",
          }).then(() => {
            localStorage.removeItem("jwtToken"); // Elimina el token del almacenamiento local
            navigate('/loginAdmin'); // Redirige a la página de inicio de sesión
          });
          return;
        }

        if (response.ok) {
          const dataJSON = await response.json();
          const information = dataJSON.map((detailsSale) => ({
            idPedido: detailsSale.idPedido,
            email: detailsSale.email,
            fechaCompra: new Date(detailsSale.fecha).toISOString().split("T")[0],
            precioTotal: detailsSale.total,
          }));
          setData(information);
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error al obtener la información.",
          });
        }
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error de conexión. Intenta de nuevo más tarde.",
        });
      }
    };

    fetchData();
  }, [token, navigate]);

  const handleDetailClick = (row) => setModalData(row);
  const handleReciboClick = () => setShowReciboModal(true);
  const handleEnvioClick = () => setShowLinkModal(true);

  const closeModal = () => {
    setModalData(null);
    setShowLinkModal(false);
    setShowReciboModal(false);
  };

  const columns = [
    {
      name: "Detalles",
      cell: (row) => <Button onClick={() => handleDetailClick(row)} icon={FrameOjo} altText="Detalles" style={styles.detalleButton} />,
      center: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      center: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.fechaCompra,
      sortable: true,
      center: true,
    },
    {
      name: "Precio Total",
      selector: (row) => `$${row.precioTotal}`,
      sortable: true,
      center: true,
    },
    {
      name: "Recibo",
      cell: (row) => <Button onClick={() => handleReciboClick(row)} icon={FrameRecibo} altText="Recibo" style={styles.reciboButton} />,
      center: true,
    },
    {
      name: "Confirmar",
      cell: (row) => <Button onClick={() => alert(`Confirmar venta de: ${row.email}`)} icon={FrameConfirmar} altText="Confirmar" style={styles.confirmButton} />,
      center: true,
    },
    {
      name: "Rechazar",
      cell: (row) => <Button onClick={() => alert(`Rechazar venta de: ${row.email}`)} icon={FrameCancelar} altText="Rechazar" style={styles.cancelButton} />,
      center: true,
    },
    {
      name: "Editar Estatus",
      cell: (row) => <Button onClick={() => handleEnvioClick(row)} icon={FrameEnvio} altText="Enviar" style={styles.envioButton} />,
      center: true,
    },
  ];

  return (
    <>
      <div className={styles["tabla-detalles_venta"]}>
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          pagination
          paginationPerPage={10}
          fixedHeader
        />
        {modalData && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={closeModal}>&times;</span>
              <DetalleVentaProductos data={modalData} />
              <button className={styles.confirmButton} onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}

        {showLinkModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={closeModal}>&times;</span>
              <LinkProducto />
              <button className={styles.confirmButton} onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}

        {showReciboModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={closeModal}>&times;</span>
              <ReciboProducto />
              <button className={styles.confirmButton} onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
