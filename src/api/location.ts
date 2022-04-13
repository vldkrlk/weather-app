import Storage from "./storage";
import Cords from "../types/Cords";
import Api from "./api";
import { AxiosResponse } from "axios";
import Method from "@/types/Method";
import GeoPosition from "@/types/GeoPosition";
import ILocationApi from "@/types/ILocationApi";

class LocationApi implements ILocationApi {
  private geolocation: Partial<GeolocationPosition> = {};
  private api = new Api(process.env.VUE_APP_API_URL);

  public async init(): Promise<void> {
    this.geolocation = await this.getCoordinates();
  }

  public location(): Cords {
    if (!this.geolocation.coords) {
      throw new Error("Call before initialization");
    }
    return {
      lon: this.geolocation.coords.longitude,
      lat: this.geolocation.coords.latitude,
    };
  }

  public setLocation(location: object): void {
    Storage.set("location", JSON.stringify(location));
  }

  public isLocationInStorage(): boolean {
    return Storage.get("location") != null;
  }

  public async getCountryAndCityNames(): Promise<GeoPosition> {
    try {
      const { lon, lat }: Cords = await this.location();

      const response: AxiosResponse<GeoPosition[]> = await this.api.query(
        "/api/geo/1.0/reverse",
        Method.GET,
        {
          lon,
          lat,
          limit: 1,
        }
      );

      return response.data[0];
    } catch (e) {
      throw new Error();
    }
  }

  private getCoordinates(): Promise<GeolocationPosition> {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  private getLocationFromStorage(): Location | null {
    const locationString = Storage.get("location");
    if (locationString == null) {
      return null;
    }
    return JSON.parse(locationString);
  }
}
export default LocationApi;
