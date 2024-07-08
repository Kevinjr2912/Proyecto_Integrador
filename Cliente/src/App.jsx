import './App.css';
import Principal from "./Paginas/Principal"


function App() {

  return (
    <>
      <Principal></Principal>
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
