import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import styles from "../../Estilos/TablaProducto.module.css";
import EliminarModal from "../Modals/EliminarModal";
import EditarModal from "../Modals/EditarModal";
import FrameEditar from "../../Icons/FrameEditar.svg";
import FrameEliminar from "../../Icons/FrameEliminar.svg";
import Swal from 'sweetalert2';

// Componente para el botón de editar
const EditarButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.editarButton}>
    <img src={FrameEditar} alt="Editar" />
  </button>
);

// Componente para el botón de eliminar
const EliminarButton = ({ onClick }) => (
  <button onClick={onClick} className={styles.eliminarButton}>
    <img src={FrameEliminar} alt="Eliminar" />
  </button>
);

// Función para truncar el texto
const truncateText = (text, maxWords) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length <= maxWords ? text : `${words.slice(0, maxWords).join(" ")}...`;
};

// Estilos personalizados para la tabla
const customStyles = {
  rows: {
    style: {
      backgroundColor: '#1e1e1e',
      color: '#ffffff',
      maxWidth: '100%',
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
      padding: '7px 10px',
    }
  },
  pagination: {
    style: {
      backgroundColor: '#333333',
      color: '#ffffff',
    }
  }
};

// Componente principal de la tabla de productos
function TablaProducto({ products }) {
  const [isEliminarModalOpen, setIsEliminarModalOpen] = useState(false);
  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);
  const [records, setRecords] = useState(products);
  const navigate = useNavigate();

  useEffect(() => {
    setRecords(products);
  }, [products]);

  // Función para redirigir a la página de inicio de sesión si el token ha expirado
  const handleTokenExpiration = () => {
    Swal.fire({
      icon: "error",
      title: "Sesión expirada",
      text: "Tu sesión ha expirado. Por favor, inicia sesión nuevamente.",
    }).then(() => {
      localStorage.removeItem('jwtToken');
      navigate('/loginAdmin');
    });
  };

  // Manejo del cambio en el campo de búsqueda
  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setRecords(products.filter(record => record.nombre.toLowerCase().includes(query)));
  };

  // Manejo de la edición de un producto
  const handleEdit = (product) => {
    setProductToEdit(product);
    setIsEditarModalOpen(true);
  };

  // Manejo de la eliminación de un producto
  const handleDelete = (product) => {
    setProductToDelete(product);
    setIsEliminarModalOpen(true);
  };

  // Confirmar la eliminación del producto
  const confirmDelete = async () => {
    const productId = productToDelete?.idProductos;
    const token = localStorage.getItem('jwtToken');

    if (!token) {
      navigate('/loginAdmin');
      return;
    }

    if (!productId) {
      console.error('No se pudo obtener el ID del producto');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/products/deleteProduct/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 401) {
        // Token expirado o no autorizado
        handleTokenExpiration();
        return;
      }

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: 'Producto eliminado exitosamente',
          showConfirmButton: false,
          timer: 1500,
        });

        setRecords(records.filter(record => record.idProductos !== productId));
        setIsEliminarModalOpen(false);
        setProductToDelete(null);
      } else {
        throw new Error('Error al eliminar el producto');
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error: ${error.message}`,
      });
    }
  };

  // Manejo de la edición de un producto
  const handleEditProduct = (editedProduct) => {
    setRecords(prevRecords =>
      prevRecords.map(record =>
        record.idProductos === editedProduct.idProductos ? editedProduct : record
      )
    );
    setIsEditarModalOpen(false);
    setProductToEdit(null);
  };

  // Columnas de la tabla
  const columns = [
    {
      name: "IdProductos",
      selector: row => row.idProductos,
      omit: true,
    },
    {
      name: "Producto",
      selector: row => row.nombre,
      sortable: true,
      center: true,
      maxWidth: '600px',
    },
    {
      name: "Categoría",
      selector: row => row.nombreCategoria || row.categoria,
      sortable: true,
      center: true,
      maxWidth: '150px'
    },
    {
      name: "Precio",
      selector: row => row.precio,
      sortable: true,
      center: true,
      maxWidth: '150px'
    },
    {
      name: "Descripción",
      selector: row => truncateText(row.descripcion, 30),
      maxWidth: '600px',
      center: true,
      wrap: true,
    },
    {
      name: "Acciones",
      cell: row => (
        <div>
          <EditarButton onClick={() => handleEdit(row)} />
          <EliminarButton onClick={() => handleDelete(row)} />
        </div>
      ),
      maxWidth: '600px',
      center: true,
    }
  ];

  return (
    <>
      <div>
        <div className={styles.headerContainer}>
          <input
            className={styles.buscador}
            type="text"
            onChange={handleChange}
            placeholder="Buscar..."
          />
        </div>
        <div className={styles.containerTabla}>
          <DataTable
            columns={columns}
            data={records}
            customStyles={customStyles}
            pagination
            paginationPerPage={10}
            fixedHeader
          />
        </div>
      </div>
      <EliminarModal
        isOpen={isEliminarModalOpen}
        onClose={() => setIsEliminarModalOpen(false)}
        onConfirm={confirmDelete}
      />
      <EditarModal
        isOpen={isEditarModalOpen}
        onClose={() => setIsEditarModalOpen(false)}
        onEditProduct={handleEditProduct}
        product={productToEdit}
      />
    </>
  );
}

export default TablaProducto;
