import HttpEvent from  './utils/HttpEvent'

class ReservationService {
  httpEvent: HttpEvent;
  constructor() {
    this.httpEvent = new HttpEvent('https://localhost:7163');
  }

  async listReservations() {
    return this.httpEvent.get(`/Reservas`);
  }

  async postReservation(newEvent:any){
    return this.httpEvent.post('/Reservas', newEvent);
  }
}

export default new ReservationService();
