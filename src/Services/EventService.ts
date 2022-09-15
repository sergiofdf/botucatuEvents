import HttpEvent from  './utils/HttpEvent'

class EventService {
  httpEvent: HttpEvent;
  constructor() {
    this.httpEvent = new HttpEvent('https://localhost:7163');
  }

  async listEvents() {
    return this.httpEvent.get(`/Eventos`);
  }

  async postEvent(newEvent:any){
    return this.httpEvent.post('/Eventos', newEvent);
  }

}

export default new EventService();
