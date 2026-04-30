import { GroceryCategory, GroceryItem, ItemDescription } from "../model/globalObjects";
import { ITEM_ATTRIBUTES } from "./constants";

export class GroceryItemsCatalogManager {
  static itemsCatalog = require("./../assets/catalogs/groceryItemsCatalog.json");
  
  static getItemsDescriptions(groceryItems: GroceryItem[]): Array<ItemDescription> {
    var list: Array<ItemDescription> = [];
    for (var i=0; i < groceryItems.length; i++) {
      var item = groceryItems[i];
      list.push(item.description);
    }
    return list;
  }

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

  public static isWarningItem(item: GroceryItem) {
    var attrs = item.description.attributes;
    for (var i=0; i < attrs.length; i++) {
      const attr = attrs[i];
      if (attr[0] === ITEM_ATTRIBUTES.WARNING && attr[1].length > 0) {
        return true;
      }
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
}