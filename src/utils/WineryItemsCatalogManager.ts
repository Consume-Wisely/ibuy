import { WineryItem } from "../model/globalObjects";

export class WineryItemsCatalogManager {
  static wineries = require("./../assets/catalogs/wineryItemsCatalog.json").items;
  
  public static getWineries(): Array<WineryItem> {
    return WineryItemsCatalogManager.wineries;
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

  public static getItemComments(item: WineryItem): Array<string> {
    var list: Array<string> = [];
    if (item.warningFlag !== undefined) {
      list.push(`האם מתאים לערכיך? - ${item.warningFlag}`);
    }
    
    if (item.singleApproval !== undefined) {
      list.push(`כשרות יחידה: ${item.singleApproval}`);
    }

    if (item.noApproval !== undefined) {
      list.push(`ללא הכשר: ${item.noApproval}`);
    }

    if (item.openSaturday !== undefined) {
      list.push(`פתוח בשבת: ${item.openSaturday}`);
    }

    return list;
  }  
}