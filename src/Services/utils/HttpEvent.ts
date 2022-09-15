import delay from '../utils/delay';
import APIError from '../../errors/APIError';

class HttpEvents {
  baseURL = "";
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(path:string) {
    await delay(500);

    const response = await fetch(`${this.baseURL}${path}`);

    const contentType = response.headers.get('Content-Type');

    let body = null;

    if (contentType?.includes('json')) {
      body = await response.json();
    }
    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }

  async post(path:string, body: any){

    await delay(500);

    const responseToken = await fetch('https://localhost:7032/Token/Eventos?cpf=14725836996');

    const bearerToken = await responseToken.text();

    await delay(500);
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + bearerToken);
    

    const response = await fetch(`${this.baseURL}${path}`, {
      method: "POST",
      mode: 'cors',
      headers: myHeaders,
      body: JSON.stringify(body)
    });

    return response.ok;

  }

}

export default HttpEvents;
