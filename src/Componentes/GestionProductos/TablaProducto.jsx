import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../Estilos/TablaProducto.css";

function TablaProducto({ products }) {
  const columns = [
    {
      name: "Producto",
      selector: row => row.nombre,
      sortable: true
    },
    {
      name: "Categoria",
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
      name: "Descripcion",
      selector: row => row.descripcion
    },
    {
      name: "Acciones",
      selector: row => row.acciones
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

        <div className="container-tabla">
        <input className="buscador" type="text" onChange={handleChange} placeholder="Buscar..." />
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
    </>
  );
}

export default TablaProducto;
