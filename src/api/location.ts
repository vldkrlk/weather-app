import Storage from "./storage";
import Location from "@/types/Location";

class LocationApi {
  public async location(): Promise<Location | null> {
    if (this.isLocationInStorage()) {
      return this.getLocationFromStorage();
    }

    const geolocation: GeolocationPosition = await this.getCoordinates();
    return {
      lon: geolocation.coords.longitude,
      lat: geolocation.coords.latitude,
    };
  }
  public setLocation(location: object) {
    Storage.set("location", JSON.stringify(location));
  }
  public isLocationInStorage() {
    return Storage.get("location") != null;
  }

  private getCoordinates() {
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
