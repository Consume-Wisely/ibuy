import { ItemDescription, LocationItem } from "../model/globalObjects";

export class ModelUtils {
  public static getItemsDescriptions(items: LocationItem[]): Array<ItemDescription> {
    var list: Array<ItemDescription> = [];
    for (var i=0; i < items.length; i++) {
      var item = items[i];
      list.push(item.description);
    }
    return list;
  }

  public static getItemsDescriptionsByLocation(items: Array<LocationItem>, 
    id: string): ItemDescription[] {
    var list: Array<ItemDescription> = [];
    for (var i=0; i < items.length; i++) {
      var item: LocationItem = items[i];
      if (item.description.location !== undefined && item.description.location === id) {
        list.push(item.description);
      }
    }
    return list;
  }

}