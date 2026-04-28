import { GroceryCategory, GroceryItem, ItemDescription } from "../model/globalObjects";
import { FILTER_ENTRIES } from "./constants";

export class GroceryItemsCatalogManager {
  static itemsCatalog = require("./../assets/catalogs/groceryItemsCatalog.json");
  
  public static getItems(category: GroceryCategory): Array<GroceryItem> {
    const catalogItems: Array<GroceryItem> = this.itemsCatalog.items;
    var items: Array<GroceryItem> = [];

    for (var i=0; i < catalogItems.length; i++) {
      var item = catalogItems[i];
      if (
        item.category === category.categoryId &&
        ((item.subCategory !== undefined && category.subCategory !== undefined &&
        item.subCategory === category.subCategory)
        ||
        (item.subCategory === undefined && category.subCategory === undefined))
      ) {
        items.push(item);
      }
    }
    return items;
  }

  public static getItemsDescriptions(items: Array<GroceryItem>): Array<ItemDescription> {
    var arr: Array<ItemDescription> = [];
    for (var i=0; i < items.length; i++) { 
      var item = items[i];
      arr.push({
        name: item.name,
        icons: this.getItemIcons(item),
        comments: this.getItemComments(item),
        lastUpdate: item.lastUpdate,
        images: item.images,
        detailsImages: item.detailsImages
      });
    }
    return arr;
  }

  public static isWarningItem(item: GroceryItem) {
    if (item.warningFlag !== undefined && item.warningFlag.length > 0) {
      return true;
    }
    return false;
  }

  public static getNoWawrningItems(items: Array<GroceryItem>): Array<GroceryItem> {
    var arr: Array<GroceryItem> = [];
    for (var i=0; i < items.length; i++) { 
      var item = items[i];
      if (!this.isWarningItem(item)) {
        arr.push(item);
      }
    }
    return arr;
  }

  public static getWawrningItems(items: Array<GroceryItem>): Array<GroceryItem> {
    var arr: Array<GroceryItem> = [];
    for (var i=0; i < items.length; i++) { 
      var item = items[i];
      if (this.isWarningItem(item)) {
        arr.push(item);
      }
    }
    return arr;
  }

  public static getWarningItemsDescriptions(items: Array<GroceryItem>): Array<ItemDescription> {
    var arr: Array<ItemDescription> = [];
    for (var i=0; i < items.length; i++) { 
      var item = items[i];
      if (this.isWarningItem(item)) {
        arr.push({
          name: item.name,
          lastUpdate: item.lastUpdate,
          icons: ["resources/icons/warning-flag.png"],
          comments: [[FILTER_ENTRIES.WARNING, item.warningFlag!]],
          images: item.images,
          detailsImages: item.detailsImages
        });
      }
    }
    return arr;
  }

  /*
    Relevant object attributes:
    images?: Array<string>;
    X  singleApproval?: string;
    noApproval?: string;
    fullServiceOnSaturday?: string;
    notQualified?: boolean;
    openSaturday?: boolean;
    Tzohar?: boolean;
    X  warningFlag?: string; 
    X  detailsImages?: Array<string>;
  */
  public static getItemIcons(item: GroceryItem): Array<string> {
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

    return list;
  }

  public static getItemComments(item: GroceryItem): Array<[FILTER_ENTRIES, string]> {
    var list: Array<[FILTER_ENTRIES, string]> = [];
    if (item.warningFlag !== undefined) {
      list.push([FILTER_ENTRIES.WARNING, item.warningFlag]);
    }
    
    if (item.singleApproval !== undefined) {
      list.push([FILTER_ENTRIES.SINGLE_APPROVAL, item.singleApproval]);
    }

    if (item.noApproval !== undefined) {
      list.push([FILTER_ENTRIES.NO_APPROVAL, item.noApproval]);
    }

    return list;
  }
}