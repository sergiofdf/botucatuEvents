import { useCallback, useEffect, useState } from 'react';
import EventService from '../../Services/EventService';
import { Container } from './styles';



export default function Eventos() {

  interface event{
    idEvent: number;
    title: string;
    description: string;
    dateHourEvent: string;
    local: string;
    address: string;
    price: string;
    status: boolean;
  }


  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);


  const loadEvents = useCallback(async () => {
    try {
      setIsLoading(true);

      const eventList = await EventService.listEvents();
      setHasError(false);

      setEvents(eventList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEvents();
  },[]);

  return (
    <Container>
      {events.length > 0 && (
      <tr>
        <th>Id Evento</th>
        <th>Nome Evento</th>
        <th>Descrição</th>
        <th>Data</th>
        <th>Local</th>
        <th>Endereço</th>
        <th>Preço</th>
        <th>Status</th>
      </tr>
       )}
      
      {events.map((event: event)=> (
        <tr>
          <td>{event.idEvent}</td>
          <td>{event.title}</td>
          <td>{event.description}</td>
          <td>{event.dateHourEvent}</td>
          <td>{event.local}</td>
          <td>{event.address}</td>
          <td>{event.price}</td>
          <td>{event.status.toString()}</td>
        </tr>        
        ))}

      {(hasError && events.length == 0) && (
        <strong>Nenhum evento encontrado. Verifique a conexão com a API.</strong>
      )}
    </Container>
  );
}