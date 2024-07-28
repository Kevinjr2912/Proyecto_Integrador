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

const DetalleButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.detalleButton}>
    <img src={FrameOjo} alt="Detalles" />
  </button>
);

const ReciboButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.reciboButton}>
    <img src={FrameRecibo} alt="Recibo" />
  </button>
);

const ConfirmButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.confirmButton}>
    <img src={FrameConfirmar} alt="Confirmar" />
  </button>
);

const CancelButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.cancelButton}>
    <img src={FrameCancelar} alt="Rechazar" />
  </button>
);

const EnvioButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.envioButton}>
    <img src={FrameEnvio} alt="Enviar" />
  </button>
);

const customStyles = {
  rows: {
    style: {
      backgroundColor: '#1e1e1e',
      color: '#ffffff',
    }
  },
  headCells: {
    style: {
      backgroundColor: '#333333',
      color: '#ffffff',
    }
  },
  cells: {
    style: {
      backgroundColor: '#1e1e1e',
      color: '#ffffff',
    }
  },
  pagination: {
    style: {
      backgroundColor: '#1e1e1e',
      color: '#ffffff',
    }
  }
};

export default function DetalleVenta() {
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showReciboModal, setShowReciboModal] = useState(false);
  const [comprobantePago, setComprobantePago] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/customers/getClienteComprobante/1");
        const result = await response.json();

        console.log("Resultado del fetch:", result);

        if (result && typeof result === "object" && result.comprobantePagoUrl) {
          console.log("Longitud de base64:", result.comprobantePagoUrl.length);
          setData([result]); // Encapsula el objeto en un array
        } else {
          throw new Error("Expected an object with comprobantePagoUrl");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDetailClick = (row) => {
    console.log("Detalle click:", row);
    setModalData(row);
  };

  const handleReciboClick = (row) => {
    console.log("Recibo click:", row);
    console.log("Longitud de base64 en click:", row.comprobantePagoUrl.length);
    setComprobantePago(row.comprobantePagoUrl); 
    setShowReciboModal(true);
  };

  const handleConfirmChange = (row) => {
    alert(`Confirmar venta de: ${row.email}`);
  };

  const handleRechazarChange = (row) => {
    alert(`Rechazar venta de: ${row.email}`);
  };

  const handleEnvioClick = (row) => {
    setShowLinkModal(true);
  };

  const closeModal = () => {
    setModalData(null);
    setShowLinkModal(false);
    setShowReciboModal(false);
  };

  const columns = [
    {
      name: "Detalles",
      cell: row => <DetalleButton onClick={() => handleDetailClick(row)} />,
      center: true,
    },
    {
      name: "Email",
      selector: row => row.email,
      sortable: true,
      center: true,
    },
    {
      name: "Fecha",
      selector: row => row.fechaCompra,
      sortable: true,
      center: true,
    },
    {
      name: "PrecioTotal",
      selector: row => `$${row.precioTotal}`,
      sortable: true,
      center: true,
    },
    {
      name: "Recibo",
      cell: row => <ReciboButton onClick={() => handleReciboClick(row)} />,
      center: true,
    },
    {
      name: "Confirmar",
      cell: row => <ConfirmButton onClick={() => handleConfirmChange(row)} />,
      center: true,
    },
    {
      name: "Rechazar",
      cell: row => <CancelButton onClick={() => handleRechazarChange(row)} />,
      center: true,
    },
    {
      name: "Editar Estatus",
      cell: row => <EnvioButton onClick={() => handleEnvioClick(row)} />,
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
              <button className={styles.confirmarButton}>Confirmar</button>
              <button className={styles.cancelarButton}>Cancelar</button>
            </div>
          </div>
        )}

        {showLinkModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={closeModal}>&times;</span>
              <LinkProducto />
              <button className={styles.confirmarButton}>Confirmar</button>
              <button className={styles.cancelarButton}>Cancelar</button>
            </div>
          </div>
        )}

        {showReciboModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={closeModal}>&times;</span>
              <ReciboProducto comprobantePagoUrl={comprobantePago} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
