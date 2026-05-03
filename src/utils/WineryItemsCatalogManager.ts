import { LocationItem } from "../model/globalObjects";

export class WineryItemsCatalogManager {
  static wineries = require("./../assets/catalogs/wineryItemsCatalog.json").items;
  
  public static getWineries(): Array<LocationItem> {
    return WineryItemsCatalogManager.wineries;
  }
}