import Api from "./api";
import LocationApi from "./location";
import Weather from "@/types/Weather";
import Method from "@/types/Method";

class WeatherApi {
  private locationApi = new LocationApi();

  private api = new Api(process.env.VUE_APP_API_URL);
  public async getCurrentWeather(): Promise<Weather | null> {
    try {
      const location = await this.locationApi.location();

      if (!location) {
        throw new Error("Location is invalid");
      }

      const response = await this.api.query("/api/weather", Method.GET, {
        ...location,
      });

      return response.data;
    } catch (e) {
      return null;
    }
  }
}

export default WeatherApi;
