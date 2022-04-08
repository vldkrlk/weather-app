import Cords from "./Cords";
import GeoPosition from "./GeoPosition";

export default interface ILocationApi {
  init(): void;
  location(): Cords;
  setLocation(location: object): void;
  isLocationInStorage(): boolean;
  getCountryAndCityNames(): Promise<GeoPosition | undefined>;
}
