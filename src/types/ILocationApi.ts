import Locality from "./Locality";

export default interface ILocationApi {
  getLocation(): Promise<GeolocationPosition>;
  getLocality(lat: number, lon: number): Promise<Locality>;
  setLocation(lat: number, lon: number): void;
}
