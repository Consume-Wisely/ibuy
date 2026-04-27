import { useState } from "react";
import { PageMenu } from "../components/shared/PageMenu/PageMenu"
import { TopBanner } from "../components/shared/TopBanner/TopBanner"
import { TopMenu } from "../components/shared/TopMenu/TopMenu"
import { MenuEntry } from "../model/uiObjects"
import { ENTRIES, PAGE_MENU_ENTRIES } from "../utils/constants"
import { Services } from "./../components/Services/Services"

export const ServicesPage = () => {
    const pageMenuEntries: Array<MenuEntry> = [
    {
      entryId: PAGE_MENU_ENTRIES.RESTAURANTS,
      title: "מסעדות"
    },
    {
      entryId: PAGE_MENU_ENTRIES.PUBS,
      title: "פאבים"
    },
    {
      entryId: PAGE_MENU_ENTRIES.HOTELS,
      title: "מלונות"
    }
  ];

  const [selection, setSelection] = 
    useState<PAGE_MENU_ENTRIES>(PAGE_MENU_ENTRIES.RESTAURANTS);

  return (
    <div className="app-page">
      <TopBanner />
      <TopMenu seletedEntry={ ENTRIES.SERVICES } />
      <PageMenu menuEntries={ pageMenuEntries } 
        selectedEntry={ selection } 
        selectionHandler={(selection: PAGE_MENU_ENTRIES) => setSelection(selection)} />
      { selection === PAGE_MENU_ENTRIES.RESTAURANTS &&
        <div className="app-indent-top-32">
          בקרוב יוצג כאן מידע על מסעדות
        </div>
      }
      { selection === PAGE_MENU_ENTRIES.PUBS &&
        <div className="app-indent-top-32">
          בקרוב יוצג כאן מידע על פאבים
        </div>
      }
      { selection === PAGE_MENU_ENTRIES.HOTELS &&
        <div className="app-indent-top-32">
          בקרוב יוצג כאן מידע על מלונות
        </div>
      }
    </div>
  )
}
