import React, { useState } from "react";
import DataTable from "react-data-table-component";
import styles from "../../Estilos/DetalleVenta.module.css";
import FrameOjo from "../../Icons/FrameOjo.svg";
import FrameRecibo from "../../Icons/FrameRecibo.svg"
import FrameConfirmar from "../../Icons/FrameConfirmar.svg"
import FrameCancelar from "../../Icons/FrameCancelar.svg"
import FrameEnvio from "../../Icons/FrameEnvio.svg"

// Componentes para los botones y checkboxes
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

const ConfirmCheckbox = ({ checked, onChange }) => (
  <input type="checkbox" checked={checked} onChange={onChange} />
);

const columns = [
  {
    name: "Detalles",
    cell: row => <DetalleButton onClick={() => handleDetailClick(row)} />,
  },
  {
    name: "Email",
    selector: row => row.email,
    sortable: true,
  },
  {
    name: "Fecha",
    selector: row => row.fechaCompra,
    sortable: true,
  },
  {
    name: "PrecioTotal",
    selector: row => `$${row.precioTotal}`,
    sortable: true,
  },
  {
    name: "Recibo",
    cell: row => <ReciboButton onClick={() => handleReciboClick(row)} />,
  },
  {
    name: "Confirmar",
    cell: row => <ConfirmCheckbox checked={row.confirmar} onChange={() => handleConfirmChange(row)} />,
  },
  {
    name: "Rechazar",
    cell: row => <ConfirmCheckbox checked={row.rechazar} onChange={() => handleRechazarChange(row)} />,
  },
  {
    name: "Editar Estatus",
    cell: row => <ConfirmCheckbox checked={row.editarEstatus} onChange={() => handleEditarEstatusChange(row)} />,
  },
];

const initialData = [
  {
    id: 1,
    email: "example1@example.com",
    fechaCompra: "2023-07-20",
    precioTotal: 50,
    confirmar: false,
    rechazar: false,
    editarEstatus: false,
  },
  // Puedes añadir más datos aquí
];

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

  const handleDetailClick = (row) => {
    alert(`Detalles de: ${row.email}`);
  };

  const handleReciboClick = (row) => {
    alert(`Recibo de: ${row.email}`);
  };

  const handleConfirmChange = (row) => {
    setData(data.map(item => item.id === row.id ? { ...item, confirmar: !item.confirmar } : item));
  };

  const handleRechazarChange = (row) => {
    setData(data.map(item => item.id === row.id ? { ...item, rechazar: !item.rechazar } : item));
  };

  const handleEditarEstatusChange = (row) => {
    setData(data.map(item => item.id === row.id ? { ...item, editarEstatus: !item.editarEstatus } : item));
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
    </div>
  );
}
