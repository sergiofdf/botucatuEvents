import { useCallback, useEffect, useState } from 'react';
import ReservationService from '../../Services/ReservationService';
import { Container } from './styles';



export default function Reservas() {

  interface reservation{
    idReservation: number;
    idEvent: string;
    personName: string;
    quantity: string;
  }


  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);


  const loadReservations = useCallback(async () => {
    try {
      setIsLoading(true);

      const reservationList = await ReservationService.listReservations();

      setHasError(false);

      setReservations(reservationList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadReservations();
  },[]);

  return (
    <Container>
      {reservations.length > 0 &&(
      <tr>
        <th>Id Reserva</th>
        <th>Id Evento</th>
        <th>Nome Responsável</th>
        <th>Quantidade</th>
      </tr>
      )}
      
      {reservations.map((reservation: reservation)=> (
        <tr>
          <td>{reservation.idReservation}</td>
          <td>{reservation.idEvent}</td>
          <td>{reservation.personName}</td>
          <td>{reservation.quantity}</td>
        </tr>        
        ))}

      {(hasError && reservations.length == 0) && (
        <strong>Nenhuma reserva encontrada. Verifique a conexão com a API.</strong>
      )}
    </Container>
  );
}