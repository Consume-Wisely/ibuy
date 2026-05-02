import { LocationDescriptor } from "../model/globalObjects";

export class LocationsCatalogManager {
  static locations: Array<LocationDescriptor> = require("./../assets/catalogs/locationsCatalog.json");
  
  public static getLocations(): Array<LocationDescriptor> {
    return LocationsCatalogManager.locations;
  }

  public static getLocationName(id: string | undefined): string {
    if (id === undefined) {
      return "";
    }

    for (var i=0; i < LocationsCatalogManager.locations.length; i++) {
      const l = LocationsCatalogManager.locations[i];
      if (l.id === id) {
        return l.name;
      }
    }

    return "";
  }
}