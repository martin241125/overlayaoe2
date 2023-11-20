import { useState } from 'react';
import './CalculadoraCarne.css'; // Archivo CSS para los estilos

const CalculadoraCarne = () => {
  const [kilos, setKilos] = useState(0);
  const [precioVacio, setPrecioVacio] = useState(0);
  const [precioMatambre, setPrecioMatambre] = useState(0);
  const [precioAsado, setPrecioAsado] = useState(0);
  const [precioEntraña, setPrecioEntraña] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [precioPechitoCerdo, setPrecioPechitoCerdo] = useState(0);
  const [resultadoPersonas, setResultadoPersonas] = useState(0);
  const [resultadoPrecio, setResultadoPrecio] = useState(0);

  const personasPorKilo = 2;

  const calcularPersonas = () => {
    const totalPersonas = Math.ceil(kilos * personasPorKilo);
    setResultadoPersonas(totalPersonas);
    return totalPersonas;
  };

  const calcularPrecioAprox = () => {
    const precioTotal =
      kilos * (precioVacio + precioMatambre + precioAsado + precioEntraña + precioPechitoCerdo);
    const precioTotalFormateado = precioTotal.toFixed(2);
    setResultadoPrecio(precioTotalFormateado);
    return precioTotalFormateado;
  };

  const mostrarResultado = () => {
    calcularPersonas();
    calcularPrecioAprox();
    setModalVisible(true);
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
      <button onClick={mostrarResultado}>Calcular</button>
      {modalVisible && (
        <div className="modal">
          <h3>Resultados</h3>
          <p>Personas: {resultadoPersonas}</p>
          <p>Precio Aprox: ${resultadoPrecio}</p>
          <button onClick={() => setModalVisible(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default CalculadoraCarne;


