import React, { useState } from "react";
import DataTable from "react-data-table-component";
import styles from "../../Estilos/DetalleVenta.module.css";
import FrameOjo from "../../Icons/FrameOjo.svg";
import FrameRecibo from "../../Icons/FrameRecibo.svg";
import FrameConfirmar from "../../Icons/FrameConfirmar.svg";
import FrameCancelar from "../../Icons/FrameCancelar.svg";
import FrameEnvio from "../../Icons/FrameEnvio.svg";

// Componente para los botones y checkboxes
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

// columnas tabals
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

// datos estaticos
const initialData = [
  {
    id: 1,
    email: "example1@example.com",
    fechaCompra: "2023-07-20",
    precioTotal: 50,
  },
  
];

// estilos personalisaooooos
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
  const [data, setData] = useState(initialData);
  const [modalData, setModalData] = useState(null);

  // dunciones de los botones y los checkbox
  const handleDetailClick = (row) => {
    alert(`Detalles de: ${row.email}`);
  };

  const handleReciboClick = (row) => {
    alert(`Recibo de: ${row.email}`);
  };

  const handleConfirmChange = (row) => {
    alert(`Confirmar venta de: ${row.email}`);
  };

  const handleRechazarChange = (row) => {
    alert(`Rechazar venta de: ${row.email}`);
  };

  const handleEnvioClick = (row) => {
    setModalData(row);
    console.log(`Enviar a: ${row.email}`);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
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
            <h2>Editar Estatus</h2>
            <p>¿Estás seguro de que quieres editar el estatus de la venta a {modalData.email}?</p>
            <button className={styles.confirmButton} onClick={closeModal}>Confirmar</button>
          </div>
        </div>
      )}
    </div>
  );
}
