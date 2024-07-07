import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

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

  return (
    <>
      <div>
        <input type="text" onChange={handleChange} />
        <DataTable
          columns={columns}
          data={records}
          pagination
          paginationPerPage={10}
          fixedHeader
        />
      </div>
    </>
  );
}

export default TablaProducto;
