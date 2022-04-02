import Location from "./Location";

export default interface Weather {
  coord: Location;
  weather: Array<object>;
  main: object;
  visibility: number;
  wind: object;
  clouds: object;
}
