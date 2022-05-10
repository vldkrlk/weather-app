import Api from "./api";
import LocationApi from "./location";
import Method from "@/types/Method";
import Forecast from "../types/Forecast";
import { AxiosResponse } from "axios";
import IWeatherApi from "@/types/WeatherApi";

class WeatherApi implements IWeatherApi {
  private locationApi = new LocationApi();
  private api = new Api(process.env.VUE_APP_API_URL);

  public async getDailyForecast(): Promise<Forecast> {
    const location = await this.locationApi.getLocation();

    if (location instanceof Error) {
      throw new Error();
    }

    const response: AxiosResponse<Forecast> = await this.api.query(
      "/api/data/2.5/onecall",
      Method.GET,
      {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        units: "metric",
      }
    );

    return response.data;
  }
}

export default WeatherApi;
