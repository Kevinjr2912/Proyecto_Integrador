import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../Estilos/TablaProducto.css";
import EliminarModal from "../Modals/EliminarModal";
import EditarModal from "../Modals/EditarModal";

function TablaProducto({ products }) {
  const [isEliminarModalOpen, setIsEliminarModalOpen] = useState(false);
  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);

  const columns = [
    {
      name: "Producto",
      selector: row => row.nombre,
      sortable: true
    },
    {
      name: "Categoría",
      selector: row => row.categoria,
      sortable: true
    },
    {
      name: "Precio",
      selector: row => row.precio,
      sortable: true
    },
    {
      name: "Descuento",
      selector: row => row.descuento,
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

  const confirmDelete = () => {
    setRecords(records.filter(record => record !== productToDelete));
    setIsEliminarModalOpen(false);
    setProductToDelete(null);
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
