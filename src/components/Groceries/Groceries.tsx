import { useState } from "react";
import { GroceryCategory, GroceryCategoryDedscriptor, GroceryItem, ItemDescription } from "../../model/globalObjects";
import { ITEM_ATTRIBUTES } from "../../utils/constants";
import { GroceryCategoriesCatalogManager } from "../../utils/GroceryCategoriesCatalogManager";
import { GroceryItemsCatalogManager } from "../../utils/GroceryItemsCatalogManager";
import { FilterBar } from "./../shared/FilterBar/FilterBar";
import "./Groceries.css";
import { ItemsView } from "../shared/ItemsView/ItemsView";

export const Groceries = () => {
  const categories = GroceryCategoriesCatalogManager.getCategories();

  const [selectedCategory, setSelectedCategory] =
    useState<GroceryCategory>({
      categoryId: categories[0].id,
      subCategory: GroceryCategoriesCatalogManager.getSubCategories(categories[0])[0]
    });
  const [groceryItems, setGroceryItems] =
    useState<Array<GroceryItem>>(GroceryItemsCatalogManager.getItems(selectedCategory));
  
  var selectedCategoryDescriptor: GroceryCategoryDedscriptor | undefined =
    GroceryCategoriesCatalogManager.getCategoryDescriptor(selectedCategory.categoryId);

  const itemsDescriptions: Array<ItemDescription> = 
    GroceryItemsCatalogManager.getItemsDescriptions(groceryItems);

  const warningItemsDescriptions: Array<ItemDescription> = 
    GroceryItemsCatalogManager.getWarningItemsDescriptions(groceryItems);

  const showItems = (selectedCategory: GroceryCategory) => {
    setGroceryItems(GroceryItemsCatalogManager.getItems(selectedCategory));
  }

  const categotySelectionHandler = (entryIndex: number) => {
    const cat: GroceryCategory = {
      categoryId: categories[entryIndex].id,
      subCategory: categories[entryIndex].subCategories.length > 0 ?
        categories[entryIndex].subCategories[0]
      :
        undefined
    }
    setSelectedCategory(cat);
    showItems(cat);
  }

  const subCategotySelectionHandler = (entry: string) => {
    const cat: GroceryCategory = {
      categoryId: selectedCategory.categoryId,
      subCategory: entry
    }
    setSelectedCategory(cat);
    showItems(cat);
  }
  
  return (
    <div className="groceries-area">
      <div className="groceries-filter-area">
        <div className="groceries-filter-area-right">
          <select className="app-drop-down app-width-100" id="categories"
            onChange={ (e) => categotySelectionHandler(e.target.selectedIndex) }>
            {
              categories.map((cat: GroceryCategoryDedscriptor) => {
                return(
                  <option key={ cat.id }>{ cat.name }</option>
                )
              })
            }
          </select>
          { 
            <div>
              { selectedCategory !== undefined && 
                selectedCategoryDescriptor!.subCategories.length > 0 &&
                <select className="app-drop-down app-indent-right-16 app-width-100"
                   id="subCategories" 
                  onChange={ (e) => subCategotySelectionHandler(e.target.value) }>
                    {
                      selectedCategoryDescriptor!.subCategories.map((subCat: string) => {
                        return(
                          <option key={ subCat }>{ subCat }</option>
                        )
                      })
                    }
                </select>
              }
            </div>
          }
        </div>
        <div className="groceries-filter-area-left app-clickable"
          onClick={() => alert("אופציה זאת עדיין לא פעילה.\n כשהיא תושלם, ייפתח עמוד עם רשימת המוצרים")}>
          רשימת מוצרים
        </div>
      </div>
      <div className="margin-top-normal">
        <FilterBar entries={ [
          ITEM_ATTRIBUTES.SINGLE_APPROVAL,
          ITEM_ATTRIBUTES.NO_APPROVAL,
          ITEM_ATTRIBUTES.NOT_QUALIFIED
        ] } />
      </div>
      <div className="margin-top-normal">
        <ItemsView items={ itemsDescriptions } warningItems= { warningItemsDescriptions } />
      </div>
    </div>
  )
}
