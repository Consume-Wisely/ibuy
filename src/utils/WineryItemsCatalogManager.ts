import { ItemDescription, LocationItem } from "../model/globalObjects";

export class WineryItemsCatalogManager {
  static wineries = require("./../assets/catalogs/wineryItemsCatalog.json").items;
  
  public static getWineries(): Array<LocationItem> {
    return WineryItemsCatalogManager.wineries;
  }

  static getItemsDescriptions(wineryItems: LocationItem[]): Array<ItemDescription> {
    var list: Array<ItemDescription> = [];
    for (var i=0; i < wineryItems.length; i++) {
      var item = wineryItems[i];
      list.push(item.description);
    }
    return list;
  }
}