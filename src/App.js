import react, {useState} from "react";
import './App.css';
import api from "./services/api";

function App() {

  const [cep, setCep] = useState("")
  const [dados, setDados] = useState("")

  function atribuirCep(e){
    e.preventDefault();
    setCep(e.target.value);
  }

  function consultarCep() {
    // https://viacep.com.br/ws/{cep}/json/
    // baseURL + {cep}/json/
    let url = cep + '/json'
    api.get(url).then((response) => {
        
        if(!response.data.erro){
          let objeto = JSON.stringify(response.data);  
          setDados(objeto);
        }else{
          setDados("Sinto muito mas não foi possível encontrar os dados do CEP informado.")
        }

      }).catch((err) => {
        setDados("Sinto muito mas não foi possível encontrar os dados do CEP informado.")
      });

  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Consultar CEP</h1>
      </header>
      <div>
        <input type="number" name="cep" onChange={(e) => atribuirCep(e)} />
        <button onClick={() => consultarCep()} > Buscar CEP </button>
      </div>
      <div name="resultado">
        {dados}
      </div>
    </div>
  );
}

export default App;
