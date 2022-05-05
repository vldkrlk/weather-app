import Coords from "./Coords";

export default interface Locality extends Coords {
  country: string;
  local_names: object;
  name: string;
  state: string;
}
