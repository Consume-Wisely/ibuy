import { useState } from "react";
import { PageMenu } from "../components/shared/PageMenu/PageMenu"
import { TopBanner } from "../components/shared/TopBanner/TopBanner"
import { TopMenu } from "../components/shared/TopMenu/TopMenu"
import { MenuEntry } from "../model/uiObjects"
import { ENTRIES, PAGE_MENU_ENTRIES } from "../utils/constants"

export const LodgingServicesPage = () => {
    const pageMenuEntries: Array<MenuEntry> = [
    {
      entryId: PAGE_MENU_ENTRIES.HOTELS,
      title: "מלונות"
    },
    {
      entryId: PAGE_MENU_ENTRIES.ZIMERS,
      title: "צימרים"
    }
  ];

  const [selection, setSelection] = 
    useState<PAGE_MENU_ENTRIES>(PAGE_MENU_ENTRIES.RESTAURANTS);

  return (
    <div className="app-page">
      <TopBanner />
      <TopMenu seletedEntry={ ENTRIES.LODGING_SERVICES } />
      <PageMenu menuEntries={ pageMenuEntries } 
        selectedEntry={ selection } 
        selectionHandler={(selection: PAGE_MENU_ENTRIES) => setSelection(selection)} />
      { selection === PAGE_MENU_ENTRIES.HOTELS &&
        <div className="app-indent-top-32">
          בקרוב יוצג כאן מידע על מלונות
        </div>
      }
      { selection === PAGE_MENU_ENTRIES.ZIMERS &&
        <div className="app-indent-top-32">
          בקרוב יוצג כאן מידע על צימרים
        </div>
      }
    </div>
  )
}
