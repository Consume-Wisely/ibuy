import { ITEM_ATTRIBUTES } from "./constants";

export class ModelVisualUtils {

  static getAttributeTitle(title: ITEM_ATTRIBUTES): string {
    switch(title) {
      case ITEM_ATTRIBUTES.SINGLE_APPROVAL.toString():
        return "הכשר יחיד";        
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

}