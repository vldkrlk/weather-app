import Cords from "./Cords";

export default interface GeoPosition extends Cords {
  country: string;
  local_names: object;
  name: string;
  state: string;
}
