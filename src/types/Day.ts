import Temp from "./Temp";
import Hour from "./Hour";

interface Day extends Omit<Hour, "temp" | "feels_like" | "visibility"> {
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temp;
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  rain: number;
}

export default Day;
