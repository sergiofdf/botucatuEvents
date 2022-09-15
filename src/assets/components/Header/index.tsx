import { Link } from "react-router-dom";
import { Container } from './styles';
import logo from '../../images/logo_bot.jpg'
import { useState } from "react";

export default function Header() {
  const [eventActive, setEventActive] = useState(false);
  const [eventRegisterActive, setEventRegisterActive] = useState(false);
  const [reservationActive, setReservationActive] = useState(false);
  const [reservationRegisterActive, setReservationRegisterActive] = useState(false);
  
  function handleActiveElement(){
    setEventActive(false);
    setEventRegisterActive(false);
    setReservationActive(false);
    setReservationRegisterActive(false);
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Back" />
      </Link>
      <Link to="/eventos">
        <span className={eventActive ? "active" : ""} onClick={()=>{
          handleActiveElement();
          setEventActive(true);
        }}> Eventos</span>
      </Link>
      <Link to="/cadastroEventos">
        <span className={eventRegisterActive ? "active" : ""} onClick={()=>{
          handleActiveElement();
          setEventRegisterActive(true);
        }}>Cadastro de Evento</span>
      </Link>
      <Link to="/reservas">
         <span className={reservationActive ? "active" : ""} onClick={()=>{
          handleActiveElement();
          setReservationActive(true);
        }}>Reservas</span>
      </Link>
      <Link to="/cadastroReservas">
        <span className={reservationRegisterActive ? "active" : ""} onClick={()=>{
          handleActiveElement();
          setReservationRegisterActive(true);
        }}>Cadastro de Reservas</span>
      </Link>
    </Container>
  );
}