export default interface IWeatherApi {
  init(): void;
  getDailyForecast(): Promise<object>;
}
