import { ENTRIES, ITEM_ATTRIBUTES } from "./constants";

export class ModelVisualUtils {

  static getAttributeTitle(title: ITEM_ATTRIBUTES): string {
    switch(title) {
      case ITEM_ATTRIBUTES.SINGLE_APPROVAL.toString():
        return "הכשר רבנות בלבד";        
      case ITEM_ATTRIBUTES.NO_APPROVAL.toString():
        return "ללא הכשר";
      case ITEM_ATTRIBUTES.NOT_QUALIFIED.toString():
        return "לא כשר";
      case ITEM_ATTRIBUTES.OPEN_SATURDAY.toString():
        return "פתוח בשבת";
      case ITEM_ATTRIBUTES.WARNING.toString():
        return "מתאים לך?";
      default: return title;
    }
  }

  public static getAttributeIcon(attr: ITEM_ATTRIBUTES): string {
    if (attr === ITEM_ATTRIBUTES.WARNING) {
      return ("resources/icons/warning-flag.png");
    }

    if (attr === ITEM_ATTRIBUTES.SINGLE_APPROVAL) {
      return ("resources/icons/single-approval.png");
    }

    if (attr === ITEM_ATTRIBUTES.NO_APPROVAL) {
      return ("resources/icons/no-approval.png");
    }

    if (attr === ITEM_ATTRIBUTES.NOT_QUALIFIED) {
      return ("resources/icons/not-qualified.png");
    }

    if (attr === ITEM_ATTRIBUTES.OPEN_SATURDAY) {
      return ("resources/icons/open-saturday.png");
    }

    return ("");
  }

  public static  getItemIcons(attributes: Array<[ITEM_ATTRIBUTES, string]>): Array<string> {
    var list: Array<string> = [];
    for (var i=0; i < attributes.length; i++) {
      const icon = ModelVisualUtils.getAttributeIcon(attributes[i][0]);
      if (icon.length > 0) {
        list.push(icon);
      }
    }
    return list;
  }

  public static getTopMenuEntryTitle(entryCode: ENTRIES): string {
    switch(entryCode) {
      case ENTRIES.COFFEE_SHOPS: {
        return "בתי קפה";
      }
      case ENTRIES.GROCERIES: {
        return "מוצרי מזון";
      }
      case ENTRIES.HOTELS: {
        return "מלונות";
      }
      case ENTRIES.ICECREAM_SHOPS: {
        return "גלידריות";
      }
      case ENTRIES.PUBS: {
        return "פאבים";
      }
      case ENTRIES.RESTAURANTS: {
        return "מסעדות";
      }
      case ENTRIES.WINERIES: {
        return "יקבים";
      }
      case ENTRIES.WINERIES_SINGLE_APPROVAL: {
        return "יקבים";
      }
      case ENTRIES.ZIMERS: {
        return "צימרים";
      }
      case ENTRIES.PRESENT_PACKAGES: {
        return "חבילות שי ";
      }
      case ENTRIES.WINE_PACKAGES: {
        return "מארזי יינות";
      }
      default: return "";
    }
  }

  public static getTopMenuEntryTarget(entryCode: ENTRIES): string {
    switch(entryCode) {
      case ENTRIES.COFFEE_SHOPS: {
        return "";
      }
      case ENTRIES.GROCERIES: {
        return "/single-approval";
      }
      case ENTRIES.HOTELS: {
        return "";
      }
      case ENTRIES.ICECREAM_SHOPS: {
        return "גלידריות";
      }
      case ENTRIES.PUBS: {
        return "פאבים";
      }
      case ENTRIES.RESTAURANTS: {
        return "מסעדות";
      }
      case ENTRIES.WINERIES: {
        return "/wineries";
      }
      case ENTRIES.ZIMERS: {
        return "צימרים";
      }
      case ENTRIES.PRESENT_PACKAGES: {
        return "חבילות שי ";
      }
      case ENTRIES.WINE_PACKAGES: {
        return "מארזי יינות";
      }
      default: return "";
    }
  }

}