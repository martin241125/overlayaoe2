import { useState } from 'react';
import './CalculadoraCarne.css'; // Archivo CSS para los estilos

const CalculadoraCarne = () => {
  const [kilos, setKilos] = useState(0);
  const [precioVacio, setPrecioVacio] = useState(0);
  const [precioMatambre, setPrecioMatambre] = useState(0);
  const [precioAsado, setPrecioAsado] = useState(0);
  const [precioEntraña, setPrecioEntraña] = useState(0);
  const [precioPechitoCerdo, setPrecioPechitoCerdo] = useState(0);

  const personasPorKilo = 2;

  const calcularPersonas = () => {
    const totalPersonas = Math.ceil(kilos * personasPorKilo);
    return totalPersonas;
  };

  const calcularPrecioAprox = () => {
    const precioTotal =
      kilos * (precioVacio + precioMatambre + precioAsado + precioEntraña + precioPechitoCerdo);
    return precioTotal.toFixed(2);
  };

  return (
    <div className="card">
      <h2>Calculadora de Carne</h2>
      <label>
        Kilos de Carne:
        <input type="number" value={kilos} onChange={(e) => setKilos(e.target.value)} />
      </label>
      <br />
      <label>
        Precio Vacío por Kilo:
        <input type="number" value={precioVacio} onChange={(e) => setPrecioVacio(e.target.value)} />
      </label>
      <br />
      <label>
        Precio Matambre por Kilo:
        <input type="number" value={precioMatambre} onChange={(e) => setPrecioMatambre(e.target.value)} />
      </label>
      <br />
      <label>
        Precio Asado por Kilo:
        <input type="number" value={precioAsado} onChange={(e) => setPrecioAsado(e.target.value)} />
      </label>
      <br />
      <label>
        Precio Entraña por Kilo:
        <input type="number" value={precioEntraña} onChange={(e) => setPrecioEntraña(e.target.value)} />
      </label>
      <br />
      <label>
        Precio Pechito de Cerdo por Kilo:
        <input type="number" value={precioPechitoCerdo} onChange={(e) => setPrecioPechitoCerdo(e.target.value)} />
      </label>
      <br />
      <button onClick={() => alert(`Personas: ${calcularPersonas()}, Precio Aprox: $${calcularPrecioAprox()}`)}>
        Calcular
      </button>
    </div>
  );
};

export default CalculadoraCarne;


