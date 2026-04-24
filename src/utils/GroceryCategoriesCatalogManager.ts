import { GroceryCategoryDedscriptor } from "../model/globalObjects";

export class GroceryCategoriesCatalogManager {
  static categories = require("./../assets/catalogs/groceryCategoriesCatalog.json");
  
  public static getCategories(): Array<GroceryCategoryDedscriptor> {
    return this.categories;
  }
  
  public static getCategoryDescriptor(categoryId: string) : GroceryCategoryDedscriptor | undefined {
    for (var i=0; i < GroceryCategoriesCatalogManager.categories.length; i++) {
      const cat: GroceryCategoryDedscriptor = GroceryCategoriesCatalogManager.categories[i];
      if (cat.id === categoryId) {
        return cat;
      }
    }
    return undefined;
  }

  public static getSubCategories(category: GroceryCategoryDedscriptor) : Array<string> {
    if (category.subCategories !== undefined) {
      return category.subCategories;
    }
    else {
      return [];
    }
  }
}