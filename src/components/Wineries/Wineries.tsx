import { ItemDescription, LocationDescriptor, WineryItem } from "../../model/globalObjects";
import { FILTER_ENTRIES } from "../../utils/constants";
import { LocationsCatalogManager } from "../../utils/LocationsCatalogManager";
import { WineryItemsCatalogManager } from "../../utils/WineryItemsCatalogManager";
import { FilterBar } from "../shared/FilterBar/FilterBar";
import { ItemsView } from "../shared/ItemsView/ItemsView";
import "./Wineries.css";

export const Wineries = () => {
  const locations: Array<LocationDescriptor> = LocationsCatalogManager.getLocations();
  const wineries: Array<WineryItem> = WineryItemsCatalogManager.getWineries();

  const wineriesDescriptions: Array<ItemDescription> = 
    WineryItemsCatalogManager.getWineriesDescriptions(wineries); 
  const allWinery: WineryItem = {
    id: "allWineries",
    name: "כל היקבים",
    location: "all"
  };

  const noneLocation: LocationDescriptor = {
    id: "allLocations",
    name: "כל המקומות"
  };

  const displayedLocations: Array<LocationDescriptor> = [noneLocation, ...locations]
  const displayedWineries: Array<WineryItem> = [allWinery, ...wineries]
  const locationSelectionHandler = (selectedIndex: number) => {
    alert(`אופציה זאת עדיין לא פעילה.\n כשהיא תושלם תוצג רשימה של היקבים ב${displayedLocations[selectedIndex].name}`);
  }

  const winerySelectionHandler = (selectedIndex: number) => {
    alert(`אופציה זאת עדיין לא פעילה.\n כשהיא תושלם יוצגו פרטים של ${selectedIndex > 0 ? "יקב" : ""} ${displayedWineries[selectedIndex].name}`);
  }

  return (
    <div className="wineries-area">
      <div className="wineries-filter-area">
        <div className="wineries-filter-area-right">
          <select className="app-drop-down app-width-100" id="categories"
            onChange={ (e) => locationSelectionHandler(e.target.selectedIndex) }>
            {
              displayedLocations.map((loc: LocationDescriptor) => {
                return(
                  <option key={ loc.id }>{ loc.name }</option>
                )
              })
            }
          </select>
        </div>
        <div className="wineries-filter-area-left app-clickable">
          <select className="app-drop-down app-width-100 app-indent-right-16" id="wineries"
            onChange={ (e) => winerySelectionHandler(e.target.selectedIndex) }>
            {
              displayedWineries.map((win: WineryItem) => {
                return(
                  <option key={ win.id }>{ win.name }</option>
                )
              })
            }
          </select>
        </div>
      </div>
      <div className="margin-top-l">
        <FilterBar entries={ [
          FILTER_ENTRIES.SINGLE_APPROVAL,
          FILTER_ENTRIES.NO_APPROVAL,
          FILTER_ENTRIES.OPEN_SATURDAY
        ] } />
      </div>
      <div className="margin-top-l">
        <ItemsView items={ wineriesDescriptions } warningItems={[]} />
      </div>

    </div>
  )
}
