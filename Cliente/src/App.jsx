import './App.css';
import AddProduct from './Componentes/AddProduct';


function App() {

  return (
    <>
      <AddProduct />
      {/* <div className="card">
        <ul>
          {error && <li>Error: {error}</li>}
          {data.map((cliente) => (
            <li key={cliente.id_cliente}>{cliente.primer_nombre}</li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default App;
