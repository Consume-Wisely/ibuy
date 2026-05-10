import { useState } from "react";
import { TopBanner } from "../components/shared/TopBanner/TopBanner"
import { ENTRIES } from "../utils/constants";
import { TopMenu } from "../components/shared/TopMenu/TopMenu";

export const OrganizationsPage = () => {
  const topMenuEntries = [
    ENTRIES.PRESENT_PACKAGES,
    ENTRIES.WINE_PACKAGES
  ];

  const [selectedContent, setSelectedContent] = useState<ENTRIES>(ENTRIES.PRESENT_PACKAGES);

  return (
    <div className="app-page">
      <TopBanner />
      <TopMenu entries={ topMenuEntries } seletedEntry={ ENTRIES.PRESENT_PACKAGES } 
        onSelect={ (selection: ENTRIES) => setSelectedContent(selection) } />

      { selectedContent === ENTRIES.PRESENT_PACKAGES &&
        <div className="app-indent-top-32">
          בהמשך יוצג כאן מידע על חבילות שי
        </div>
      }
      { selectedContent === ENTRIES.WINE_PACKAGES &&
        <div className="app-indent-top-32">
          בהמשך יוצג כאן מידע על מארזי יינות
        </div>
      }
    </div>
  )
}
