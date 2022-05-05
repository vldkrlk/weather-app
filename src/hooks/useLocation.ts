import LocationApi from "../api/location";
import Locality from "@/types/Locality";
import { ref, Ref } from "vue";

type locationHook = {
  (): Promise<{
    location: Ref<GeolocationPosition>;
    locality: Ref<Locality>;
  } | null>;
};

const useLocation: locationHook = async () => {
  try {
    const locationApi = new LocationApi();

    const location = ref();
    const locality = ref();

    location.value = await locationApi.getLocation();
    locality.value = await locationApi.getLocality(
      location.value.coords.latitude,
      location.value.coords.longitude
    );

    return {
      location,
      locality,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default useLocation;
