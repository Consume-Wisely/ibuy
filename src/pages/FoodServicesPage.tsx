import { useState } from "react";
import { FoodServices } from "../components/FoodServices/FoodServices";
import { PageMenu } from "../components/shared/PageMenu/PageMenu"
import { TopBanner } from "../components/shared/TopBanner/TopBanner"
import { TopMenu } from "../components/shared/TopMenu/TopMenu"
import { MenuEntry } from "../model/uiObjects"
import { ENTRIES, PAGE_MENU_ENTRIES } from "../utils/constants"

export const FoodServicesPage = () => {
    const pageMenuEntries: Array<MenuEntry> = [
    {
      entryId: PAGE_MENU_ENTRIES.RESTAURANTS,
      title: "מסעדות"
    },
    {
      entryId: PAGE_MENU_ENTRIES.COFFEE_SHOPS,
      title: "בתי קפה וגלידריות"
    },
    {
      entryId: PAGE_MENU_ENTRIES.PUBS,
      title: "פאבים"
    }
  ];

  const [selection, setSelection] = 
    useState<PAGE_MENU_ENTRIES>(PAGE_MENU_ENTRIES.RESTAURANTS);

  return (
    <div className="app-page">
      <TopBanner />
      <TopMenu seletedEntry={ ENTRIES.FOOD_SERVICES } />
      <PageMenu menuEntries={ pageMenuEntries } 
        selectedEntry={ selection } 
        selectionHandler={(selection: PAGE_MENU_ENTRIES) => setSelection(selection)} />
      { selection === PAGE_MENU_ENTRIES.RESTAURANTS &&
        <div>
          <FoodServices repositoryName="restaurantsCatalog.json" title="מסעדות" />
        </div>
      }
      { selection === PAGE_MENU_ENTRIES.COFFEE_SHOPS &&
        <div>
          <FoodServices repositoryName="coffeeShopsCatalog.json" title="בתי קפה וגלידריות" />
        </div>
      }
      { selection === PAGE_MENU_ENTRIES.PUBS &&
        <div className="app-indent-top-32">
          בקרוב יוצג כאן מידע על פאבים
        </div>
      }
    </div>
  )
}
