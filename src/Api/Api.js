import axios from "axios";

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:4000/",
      timeout: 1000,
      headers: { "X-Custom-Header": "foobar" },
    });
  }
}

const http = new Http().instance;
export default http;
