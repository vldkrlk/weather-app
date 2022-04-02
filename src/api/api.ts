import Method from "../types/Method";
import axios from "axios";

class Api {
  public apiLink: string;
  private headers: object;

  constructor(apiLink: string, headers: object = {}) {
    this.apiLink = apiLink;
    this.headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      ...headers,
    };
  }
  public async query(
    uri: string,
    method: Method,
    params: object = {},
    body: object = {}
  ) {
    try {
      return await axios({
        url: this.getUrl(uri).href,
        method,
        data: JSON.stringify(body),
        headers: this.headers,
        params: {
          appid: process.env.VUE_APP_API_KEY,
          ...params,
        },
      });
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  private getUrl(uri: string) {
    const url = new URL(uri, this.apiLink);
    return url;
  }
}

export default Api;
