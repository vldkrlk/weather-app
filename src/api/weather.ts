import Api from "./api";
import LocationApi from "./location";
import Method from "@/types/Method";
import Cords from "@/types/Cords";
import IWeatherApi from "@/types/WeatherApi";
import Forecast from "../types/Forecast";
import { AxiosResponse } from "axios";

class WeatherApi implements IWeatherApi {
  private locationApi = new LocationApi();
  private api = new Api(process.env.VUE_APP_API_URL);

  async init() {
    await this.locationApi.init();
    return;
  }

  public async getDailyForecast(): Promise<Forecast> {
    const location: Cords = await this.getLocation();
    const weatherResponse: AxiosResponse<Forecast> = await this.api.query(
      "/api/data/2.5/onecall",
      Method.GET,
      {
        ...location,
        units: "metric",
      }
    );

    return weatherResponse.data;
  }

  private async getLocation(): Promise<Cords> {
    const location = await this.locationApi.location();
    if (!location) {
      throw new Error("Location is invalid");
    }
    return location;
  }
}

export default WeatherApi;
