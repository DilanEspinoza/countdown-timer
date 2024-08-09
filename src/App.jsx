import { useState, useEffect } from "react";
import "./App.css";
import Box from "./components/Box";
import { dia_semana } from "./utils/dia-semana";
import { meses } from "./utils/meses"

function App() {

  const [tiempo, setTiempo] = useState({
    dia: 0,
    hora: 0,
    minuto: 0,
    segundo: 0,
  })


  const fechaActual = new Date()
  const añoUsuario = fechaActual.getFullYear()
  const diaUsuario = fechaActual.getDay()
  const mesUsuario = fechaActual.getMonth()


  const fechaEsperada = "2 Sep 2024";
  const fechaLimite = new Date(fechaEsperada);

  useEffect(() => {
    const actualizarFecha = () => {
      const fechaActual = new Date();
      const totalSegundos = (fechaLimite - fechaActual) / 1000;

      const dia = Math.floor(totalSegundos / 3600 / 24);
      const hora = Math.floor((totalSegundos / 3600) % 24);
      const minuto = Math.floor((totalSegundos / 60) % 60);
      const segundo = Math.floor(totalSegundos % 60);

      setTiempo({
        dia,
        hora,
        minuto,
        segundo,
      });
    };

    const intervalo = setInterval(actualizarFecha, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, [fechaLimite]);

  return (
    <main>
      <h1>Dias faltante para el regreso a clases ? </h1>
      <header>
        <div className='dia_actual'>
          <h3>Dia actual:</h3>
          {/* <p>{`${diaUsuario}, ${numeroDiaUsuario} de ${mesUsuario} del año ${añoUsuario}`}</p> */}
          <p>{dia_semana[diaUsuario - 1]}, {diaUsuario} de {meses[mesUsuario + 1]} del año {añoUsuario}</p>
        </div>
        <div className='dia_faltante'>
          <h3>Dia Esperado:</h3>
          <p>Lunes, 2 de Septiembre del 2024</p>
        </div>
      </header>
      <div className='contenedor__reloj'>
        <Box
          number={tiempo.dia < 10 ? "0" + tiempo.dia : tiempo.dia}
          text='Dias'
          className='container_box_days'
        />
        <Box
          number={tiempo.hora < 10 ? "0" + tiempo.hora : tiempo.hora}
          text='Horas'
          className='container_box_hours'
        />
        <Box
          number={tiempo.minuto < 10 ? "0" + tiempo.minuto : tiempo.minuto}
          text='Minutos'
          className='container_box_minutes'
        />
        <Box
          number={tiempo.segundo < 10 ? "0" + tiempo.segundo : tiempo.segundo}
          text='Segundos'
          className='container_box_seconds'
        />
      </div>
    </main>
  )
}

export default App
