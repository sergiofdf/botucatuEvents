export default class APIError extends Error {
  constructor(response: Response, body: Body) {
    super();

    this.name = 'APIError';
    // this.response = response;
    // this.body = body;
    this.message =  `${response.status} - ${response.statusText}`;
  }
}
