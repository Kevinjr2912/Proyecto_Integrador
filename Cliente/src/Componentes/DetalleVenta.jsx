import React from "react";
import DataTable from "react-data-table-component";
import styles from "../Estilos/DetalleVenta.module.css";
import { text } from "@fortawesome/fontawesome-svg-core";

const columns = [
  {
    name: "Detalles",
    selector: row => row.detalles
  },
  {
    name: "Email",
    selector: row => row.email,
    sortable: true
  },
  {
    name: "Fecha",
    selector: row => row.fechaCompra,
    sortable: true
  },
  {
    name: "PrecioTotal",
    selector: row => row.precioTotal,
    sortable: true
  },
  {
    name: "Recibo",
    selector: row => row.recibo,
  },
  {
    name: "Confirmar",
    selector: row => row.confirmar
  },
  {
    name: "Rechazar",
    selector: row => row.rechazar
  },
  {
    name: "Editar Estatus",
    selector: row => row.editarEstatus
  },
];

const data = [
  {
    detalles: "no",
    email: "owo",
    fechaCompra: "owo",
    precioTotal: 50,
    recibo: "chi",
    confirmar: "chi",
    rechazar: "no",
    editarEstatus: "wewe"
  }
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
      </div>
    </>
  );
}
