import Storage from "./storage";
import Api from "./api";
import { AxiosResponse } from "axios";
import Method from "@/types/Method";
import Locality from "@/types/Locality";
import ILocationApi from "@/types/ILocationApi";

class LocationApi implements ILocationApi {
  private api = new Api(process.env.VUE_APP_API_URL);

  public async getLocation(): Promise<GeolocationPosition> {
    const location = this.getLocationFromStorage();

    if (location) {
      return location;
    }

    return new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  public async getLocality(lat: number, lon: number): Promise<Locality> {
    const response: AxiosResponse<Locality[]> = await this.api.query(
      "/api/geo/1.0/reverse",
      Method.GET,
      {
        lat,
        lon,
        limit: 1,
      }
    );

    return response.data[0];
  }

  public setLocation(lat: number, lon: number): void {
    const location: GeolocationPosition = {
      coords: {
        accuracy: 0,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: lat,
        longitude: lon,
        speed: null,
      },
      timestamp: 0,
    };
    Storage.set("location", location);
  }

  private getLocationFromStorage() {
    try {
      const locationString = Storage.get("location");
      if (locationString == null) {
        return null;
      }
      return JSON.parse(locationString);
    } catch (e) {
      return null;
    }
  }
}

export default LocationApi;
