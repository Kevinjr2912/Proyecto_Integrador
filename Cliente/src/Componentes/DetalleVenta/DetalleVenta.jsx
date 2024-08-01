import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import styles from "../../Estilos/DetalleVenta.module.css";
import FrameOjo from "../../Icons/FrameOjo.svg";
import FrameRecibo from "../../Icons/FrameRecibo.svg";
import FrameConfirmar from "../../Icons/FrameConfirmar.svg";
import FrameCancelar from "../../Icons/FrameCancelar.svg";
import FrameEnvio from "../../Icons/FrameEnvio.svg";
import DetalleVentaProductos from "../Modals/DetalleVentaProductos";
import LinkProducto from "../Modals/LinkProducto";
import ReciboProducto from "../Modals/ReciboProducto";

const token = localStorage.getItem('token');
// Componente para el botón de Detalles
const DetalleButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.detalleButton}>
    <img src={FrameOjo} alt="Detalles" />
  </button>
);

// Componente para el botón de Recibo
const ReciboButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.reciboButton}>
    <img src={FrameRecibo} alt="Recibo" />
  </button>
);

// Componente para el botón de Confirmar
const ConfirmButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.confirmButton}>
    <img src={FrameConfirmar} alt="Confirmar" />
  </button>
);

// Componente para el botón de Cancelar
const CancelButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.cancelButton}>
    <img src={FrameCancelar} alt="Rechazar" />
  </button>
);

// Componente para el botón de Enviar
const EnvioButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.envioButton}>
    <img src={FrameEnvio} alt="Enviar" />
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
  // Estado para los datos de la tabla
  const [data, setData] = useState([]);
  // Estado para los datos del modal
  const [modalData, setModalData] = useState(null);
  // Estado para mostrar el modal de LinkProducto
  const [showLinkModal, setShowLinkModal] = useState(false);
  // Estado para mostrar el modal de ReciboProducto
  const [showReciboModal, setShowReciboModal] = useState(false);

  // Función para manejar el clic en el botón de detalles
  const handleDetailClick = (row) => {
    setModalData(row);
  };

  // Función para manejar el clic en el botón de recibo
  const handleReciboClick = (row) => {
    setShowReciboModal(true);
  };

  // Función para manejar el cambio en el botón de confirmar
  const handleConfirmChange = (row) => {
    alert(`Confirmar venta de: ${row.email}`);
  };

  // Función para manejar el cambio en el botón de rechazar
  const handleRechazarChange = (row) => {
    alert(`Rechazar venta de: ${row.email}`);
  };

  // Función para manejar el clic en el botón de enviar
  const handleEnvioClick = (row) => {
    setShowLinkModal(true);
  };

  // Función para cerrar los modales
  const closeModal = () => {
    setModalData(null);
    setShowLinkModal(false);
    setShowReciboModal(false);
  };

  // Columnas de la tabla
  const columns = [
    {
      name: "Detalles",
      cell: (row) => <DetalleButton onClick={() => handleDetailClick(row)} />,
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
      name: "PrecioTotal",
      selector: (row) => `$${row.precioTotal}`,
      sortable: true,
      center: true,
    },
    {
      name: "Recibo",
      cell: (row) => <ReciboButton onClick={() => handleReciboClick(row)} />,
      center: true,
    },
    {
      name: "Confirmar",
      cell: (row) => <ConfirmButton onClick={() => handleConfirmChange(row)} />,
      center: true,
    },
    {
      name: "Rechazar",
      cell: (row) => <CancelButton onClick={() => handleRechazarChange(row)} />,
      center: true,
    },
    {
      name: "Editar Estatus",
      cell: (row) => <EnvioButton onClick={() => handleEnvioClick(row)} />,
      center: true,
    },
  ];

  //Consumir API para mostrar email, fecha compra, precio total de la compra respecto a un cliente
  const showDetailsOrder = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/sales/getInformationSale",{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (response.ok) {
        const dataJSON = await response.json();
        const information = dataJSON.map((detailsSale) => ({
          idPedido: detailsSale.idPedido,
          email: detailsSale.email,
          fechaCompra: new Date(detailsSale.fecha).toISOString().split("T")[0],
          precioTotal: detailsSale.total,
        }));
        setData(information);
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
    showDetailsOrder();
  });

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
              <span className={styles.close} onClick={closeModal}>
                &times;
              </span>
              <DetalleVentaProductos data={modalData} />
              <button className={styles.confirmButton} onClick={closeModal}>
                Cerrar
              </button>
            </div>
          </div>
        )}

        {showLinkModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={closeModal}>
                &times;
              </span>
              <LinkProducto />
              <button className={styles.confirmButton} onClick={closeModal}>
                Cerrar
              </button>
            </div>
          </div>
        )}

        {showReciboModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={closeModal}>
                &times;
              </span>
              <ReciboProducto/>
              <button className={styles.confirmButton} onClick={closeModal}>
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
