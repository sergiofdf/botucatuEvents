import {  useState } from 'react';
import ReservationService from '../../../Services/ReservationService';
import Modal from '../Modal';
import { ButtonContainer, Container, Form, Input } from './styles';



export default function ReservationForm() {

  const [idEvent, setIdEvent] = useState('');
  const [personName, setPersonName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleIdEventChange = (event: any) => {
    setIdEvent(event.target.value);
  };

  const handlePersonNameChange = (event: any) => {
    setPersonName(event.target.value);
  };

  const handleQuantityChange = (event: any) => {
    setQuantity(event.target.value);
  };
  
  async function handleSubmit(event: any) {
      event.preventDefault();
      const newReservation = {
        "idEvent": idEvent,
        "personName": personName,
        "quantity": quantity,
      }

      const response = await ReservationService.postReservation(newReservation);

      if(response == true){
        cleanForm();
        setIsOpen(true);
      }
    }

    function cleanForm(){
      setIdEvent("");
      setPersonName("");
      setQuantity("");
    }


  return (
    <Container>
      <Form onSubmit={handleSubmit} noValidate>
        <Input 
        placeholder='Id do Evento'
        value={idEvent}
        onChange={handleIdEventChange}
        />
        <Input 
        placeholder='Nome do responsável'
        value={personName}
        onChange={handlePersonNameChange}
        />
        <Input 
        placeholder='Quantidade de pessoas para a reserva'
        value={quantity}
        onChange={handleQuantityChange}
        />
        <ButtonContainer>
          <button type="submit">Cadastrar</button>
        </ButtonContainer>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </Form>
    </Container>
  );
}