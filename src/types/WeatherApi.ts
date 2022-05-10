import Forecast from "../types/Forecast";

export default interface IWeatherApi {
  getDailyForecast(): Promise<Forecast>;
}
