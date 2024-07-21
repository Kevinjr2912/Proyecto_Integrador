import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../Estilos/TablaProducto.module.css";
import EliminarModal from "../Modals/EliminarModal";
import EditarModal from "../Modals/EditarModal";
import Swal from 'sweetalert2';

function TablaProducto({ products }) {
  const [isEliminarModalOpen, setIsEliminarModalOpen] = useState(false);
  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);

  const columns = [
    {
      name: "IdProductos",
      selector: row => row.idProductos,
      omit: true
    },
    {
      name: "Producto",
      selector: row => row.nombre,
      sortable: true
    },
    {
      name: "Categoría",
      selector: row => row.nombreCategoria || row.categoria,
      sortable: true
    },
    {
      name: "Precio",
      selector: row => row.precio,
      sortable: true
    },
    {
      name: "Descripción",
      selector: row => row.descripcion
    },
    {
      name: "Acciones",
      cell: row => (
        <div>
          <button onClick={() => handleEdit(row)}>Editar</button>
          <button onClick={() => handleDelete(row)}>Eliminar</button>
        </div>
      )
    }
  ];

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

  return (
    <>
      <div>
        <div className="header-container">
          <input className="buscador" type="text" onChange={handleChange} placeholder="Buscar..." />
        </div>
        <div className="container-tabla">
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
