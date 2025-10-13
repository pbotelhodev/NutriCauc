import { useState } from "react";
import "../App.css";
import "../style.css";

function App() {
  const [valorKcal, setValorKcal] = useState(0);
  const [somaKcal, setSomaKcal] = useState(0);

  const handleInputKcal = (event) => {
    setValorKcal(event.target.value);
  };
  //Funcao que trata os imputs
  const soma = (event) => {
    event.preventDefault();

    //soma pra
    !valorKcal
      ? alert("Insira um número de Kcal válido")
      : alertHundred()//setSomaKcal(Number(somaKcal) + Number(valorKcal));

  };

  const alertHundred = () => {
    if (somaKcal > 100000) {
      setSomaKcal(100000);
      alert("Valor máximo atingido!");
    } else{
      setSomaKcal(Number(somaKcal) + Number(valorKcal));
    }
    
  };

  return (
    <>
      <div id="card">
        <div id="header">
          <h1>Calculadora de Calorias</h1>
          <h7 id="legenda-titulo" className="legenda">
            Some as calorias dos seus alimentos
          </h7>
        </div>
        <div id="painel">
          <h7 className="legenda">Total de Calorias</h7>
          <h1>{somaKcal}Kcal</h1>
        </div>
        <div id="inputKcal">
          <p className="legenda">Calorias do alimento</p>

          <input
            type="number"
            placeholder="Ex: 200"
            onChange={handleInputKcal}
          />

          <button
            className="blue"
            id="addBtn"
            onClick={soma}
          >
            Adicionar
          </button>

          <button id="zeroBtn" onClick={() => setSomaKcal(0)}>
            Zerar
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
