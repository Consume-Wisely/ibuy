import { useState } from "react";
import { TopBanner } from "../components/shared/TopBanner/TopBanner"
import { Organizations } from "../components/Organizations/Organizations"
import { MenuEntry } from "../model/uiObjects";
import { PAGE_MENU_ENTRIES } from "../utils/constants";
import { PageMenu } from "../components/shared/PageMenu/PageMenu";

export const OrganizationsPage = () => {
    const pageMenuEntries: Array<MenuEntry> = [
    {
      entryId: PAGE_MENU_ENTRIES.PRESENT_PACKAGES,
      title: "חבילות שי"
    },
    {
      entryId: PAGE_MENU_ENTRIES.WINE_PACKAGES,
      title: "מארזי יינות"
    }
  ];

  const [selection, setSelection] = 
    useState<PAGE_MENU_ENTRIES>(PAGE_MENU_ENTRIES.PRESENT_PACKAGES);

  return (
    <div className="app-page">
      <TopBanner />
      <PageMenu menuEntries={ pageMenuEntries } 
        selectedEntry={ selection } 
        selectionHandler={(selection: PAGE_MENU_ENTRIES) => setSelection(selection)} />
      { selection === PAGE_MENU_ENTRIES.PRESENT_PACKAGES &&
        <div className="app-indent-top-32">
          בקרוב יוצג כאן מידע על חבילות שי
        </div>
      }
      { selection === PAGE_MENU_ENTRIES.WINE_PACKAGES &&
        <div className="app-indent-top-32">
          בקרוב יוצג כאן מידע על מארזי יינות
        </div>
      }
    </div>
  )
}
