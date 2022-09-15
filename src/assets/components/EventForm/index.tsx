import { useState } from 'react';
import EventService from '../../../Services/EventService';
import Modal from '../Modal';
import { ButtonContainer, Container, Form, Input } from './styles';



export default function EventForm() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateHourEvent, setDateHourEvent] = useState('');
  const [local, setLocal] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (event: any) => {
    setDateHourEvent(event.target.value);
  };
  
  const handleLocalChange = (event: any) => {
    setLocal(event.target.value);
  };

  const handleAddressChange = (event: any) => {
    setAddress(event.target.value);
  };
  
  const handlePriceChange = (event: any) => {
    setPrice(event.target.value);
  };


  async function handleSubmit(event: any) {
      event.preventDefault();
      const newEvent = {
        "title": title,
        "description": description,
        "dateHourEvent": dateHourEvent,
        "local": local,
        "address": address,
        "price": price
      }

      const response = await EventService.postEvent(newEvent);

      if(response == true){
        cleanForm();
        setIsOpen(true);
      }
    }

    function cleanForm(){
      setTitle("");
      setDescription("");
      setDateHourEvent("");
      setLocal("");
      setAddress("");
      setPrice("");
    }


  return (
    <Container>
      <Form onSubmit={handleSubmit} noValidate>
        <Input 
        placeholder='Nome do Evento'
        value={title}
        onChange={handleTitleChange}
        />
        <Input 
        placeholder='Descrição do Evento'
        value={description}
        onChange={handleDescriptionChange}
        />
        <Input 
        placeholder='Data'
        value={dateHourEvent}
        onChange={handleDateChange}
        />
        <Input 
        placeholder='Local'
        value={local}
        onChange={handleLocalChange}
        />
        <Input 
        placeholder='Endereço'
        value={address}
        onChange={handleAddressChange}
        />
        <Input 
        placeholder='R$ Preço da Entrada'
        value={price}
        onChange={handlePriceChange}
        />
        <ButtonContainer>
          <button type="submit">Cadastrar</button>
        </ButtonContainer>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </Form>
    </Container>
  );
}