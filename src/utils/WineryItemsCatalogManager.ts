import { ItemDescription, WineryItem } from "../model/globalObjects";
import { ITEM_ATTRIBUTES } from "./constants";

export class WineryItemsCatalogManager {
  static wineries = require("./../assets/catalogs/wineryItemsCatalog.json").items;
  
  public static getWineries(): Array<WineryItem> {
    return WineryItemsCatalogManager.wineries;
  }
  
  public static getWineriesDescriptions(items: Array<WineryItem>): Array<ItemDescription> {
    var arr: Array<ItemDescription> = [];
    for (var i=0; i < items.length; i++) { 
      var item = items[i];
      arr.push({
        name: item.name,
        lastUpdate: item.lastUpdate,
        icons: this.getItemIcons(item),
        attributes: this.getItemAttributes(item),
        images: item.images,
        detailsImages: item.detailsImages
      });
    }
    return arr;
  }

  
  public static getItemIcons(item: WineryItem): Array<string> {
    var list: Array<string> = [];
    if (item.warningFlag !== undefined) {
      list.push("resources/icons/warning-flag.png");
    }

    if (item.singleApproval !== undefined) {
      list.push("resources/icons/single-approval.png");
    }

    if (item.noApproval !== undefined) {
      list.push("resources/icons/no-approval.png");
    }

    if (item.openSaturday !== undefined) {
      list.push("resources/icons/open-saturday.png");
    }

    return list;
  }

  public static getItemAttributes(item: WineryItem): Array<[ITEM_ATTRIBUTES, string]> {
    var list: Array<[ITEM_ATTRIBUTES, string]> = [];
    if (item.warningFlag !== undefined) {
      list.push([ITEM_ATTRIBUTES.WARNING, item.warningFlag]);
    }
    
    if (item.singleApproval !== undefined) {
      list.push([ITEM_ATTRIBUTES.SINGLE_APPROVAL, item.singleApproval]);
    }

    if (item.noApproval !== undefined) {
      list.push([ITEM_ATTRIBUTES.NO_APPROVAL, item.noApproval]);
    }

    if (item.openSaturday !== undefined) {
      list.push([ITEM_ATTRIBUTES.OPEN_SATURDAY, item.openSaturday]);
    }

    return list;
  }  
}