import { useState } from "react";
import { FoodServices } from "../components/FoodServices/FoodServices";
import { TopBanner } from "../components/shared/TopBanner/TopBanner"
import { TopMenu } from "../components/shared/TopMenu/TopMenu"
import { ENTRIES } from "../utils/constants"

export const OpenSaturdayPage = () => {
  const topMenuEntries = [
    ENTRIES.RESTAURANTS,
    ENTRIES.COFFEE_SHOPS,
    ENTRIES.PUBS,
    ENTRIES.ICECREAM_SHOPS
  ];

  const [selectedContent, setSelectedContent] = useState<ENTRIES>(ENTRIES.RESTAURANTS);

  return (
    <div className="app-page">
      <TopBanner />
      <TopMenu entries={ topMenuEntries } seletedEntry={ ENTRIES.RESTAURANTS } 
        onSelect={ (selection: ENTRIES) => setSelectedContent(selection) } />
      <div className="app-bold">למידע על יקבים פתוחים בשבת עברו לעמוד היקבים</div>
      { selectedContent === ENTRIES.RESTAURANTS &&
        <div>
          <FoodServices repositoryName="restaurantsCatalog.json" title="מסעדות" />
        </div>
      }
      { selectedContent === ENTRIES.COFFEE_SHOPS &&
        <div>
          <FoodServices repositoryName="coffeeShopsCatalog.json" title="בתי קפה" />
        </div>
      }
      { selectedContent === ENTRIES.PUBS &&
        <div>
          <FoodServices repositoryName="pubsCatalog.json" title="פאבים" />
        </div>
      }
      { selectedContent === ENTRIES.ICECREAM_SHOPS &&
        <div>
          <FoodServices repositoryName="icecreamShopsCatalog.json" title="גלידריות" />
        </div>
      }
    </div>
  )
}
