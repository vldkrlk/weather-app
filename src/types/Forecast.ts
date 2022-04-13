import Cords from "./Cords";
import Day from "./Day";
import Hour from "./Hour";
import Minute from "./Minute";

export default interface Forecast extends Cords {
  timezone: string;
  timezone_offset: number;
  current: Omit<Hour, "pop"> & { sunrise: number; sunset: number };
  minutely: Minute[];
  hourly: Hour[];
  daily: Day[];
}
