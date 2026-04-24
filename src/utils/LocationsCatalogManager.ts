import { GroceryCategoryDedscriptor } from "../model/globalObjects";

export class LocationsCatalogManager {
  static locations = require("./../assets/catalogs/locationsCatalog.json");
  
  public static getLocations(): Array<GroceryCategoryDedscriptor> {
    return LocationsCatalogManager.locations;
  }
}