import React from "react";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import styles from "../../Estilos/TablaProducto.module.css";
import EliminarModal from "../Modals/EliminarModal";
import EditarModal from "../Modals/EditarModal";
import FrameEditar from "../../Icons/FrameEditar.svg"
import FrameEliminar from "../../Icons/FrameEliminar.svg"
import Swal from 'sweetalert2';


  // Componente para el botón de edirtar
  const EditarButton = ({ onClick }) => (
    <button onClick={onClick} className={styles.editarButton}>
      <img src={FrameEditar} alt="Editar" />
    </button>
  );
  
    // Componente para el botón de eliminnar
    const EliminarButton = ({ onClick }) => (
      <button onClick={onClick} className={styles.eliminarButton}>
        <img src={FrameEliminar} alt="Editar" />
      </button>
    );
    

function TablaProducto({ products }) {
  const [isEliminarModalOpen, setIsEliminarModalOpen] = useState(false);
  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);
  const token = localStorage.getItem('token');

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
      center:true,
      maxWidth: '600px',     
       
      
    },
    {
      name: "Categoría",
      selector: row => row.nombreCategoria || row.categoria,
      sortable: true,
      center:true,
      maxWidth: '150px'
       
    },
    {
      name: "Precio",
      selector: row => row.precio,
      sortable: true,
      center:true,
      maxWidth: '150px'
       
    },
    {
      name: "Descripción",
      selector: row => truncateText(row.descripcion, 30),
      maxWidth: '600px',
      center:true,
      wrap:true,
      
      
       
    },
    {
      name: "Acciones",
      cell: row => (
        <div>
          <EditarButton onClick={() => handleEdit(row)}/>
          
          <EliminarButton onClick={() => handleDelete(row)}/>
        </div>
      ),
      maxWidth: '600px',
      center:true,
       
    }
  ];
  const truncateText = (text, maxWords) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  const [records, setRecords] = useState(products);

  useEffect(() => {
    setRecords(products);
  }, [products]);

  const handleChange = (e) => {
    const filteredRecords = products.filter(record => {
      return record.nombre.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(filteredRecords);
  };

  const handleEdit = (product) => {
    setProductToEdit(product);
    setIsEditarModalOpen(true);
  };

  const handleDelete = (product) => {
    setProductToDelete(product);
    setIsEliminarModalOpen(true);
  };

  const confirmDelete = async () => {
    const productId = productToDelete.idProductos;

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

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: 'Producto eliminado exitosamente',
          showConfirmButton: false,
          timer: 1500,
        });

        setRecords(records.filter(record => record !== productToDelete));
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

  const handleEditProduct = (editedProduct) => {
    setRecords(records.map(record => (record === productToEdit ? editedProduct : record)));
    setIsEditarModalOpen(false);
    setProductToEdit(null);
  };

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

  return (
    <>
      <div>
        <div className={styles.headerContainer}>
          <input className={styles.buscador} type="text" onChange={handleChange} placeholder="Buscar..." />
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
