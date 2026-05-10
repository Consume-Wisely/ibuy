import { useState } from "react";
import { ItemDescription, LocationDescriptor, LocationItem } from "../../model/globalObjects";
import { ITEM_ATTRIBUTES } from "../../utils/constants";
import { LocationsCatalogManager } from "../../utils/LocationsCatalogManager";
import { ModelUtils } from "../../utils/ModelUtils";
import { WineryItemsCatalogManager } from "../../utils/WineryItemsCatalogManager";
import { FilterBar } from "../shared/FilterBar/FilterBar";
import { ItemsView } from "../shared/ItemsView/ItemsView";
import "./Wineries.css";

export interface WineriesProps {
  singleApproval?: boolean
}

export const Wineries = (props: WineriesProps) => {
  const locations: Array<LocationDescriptor> = LocationsCatalogManager.getLocations();
  const wineries: Array<LocationItem> = WineryItemsCatalogManager.getWineries();

  const [wineriesDescriptions, setWineriesDescriptions] =
    useState<Array<ItemDescription>>(ModelUtils.getItemsDescriptions(wineries)); 
  const allWinery: LocationItem = {
    id: "allWineries",
    description: {
      name: "כל היקבים",
      lastUpdate: "",
      overview: "",
      attributes: []
    },
  };

  const noneLocation: LocationDescriptor = {
    id: "allLocations",
    name: "כל המקומות"
  };

  const displayedLocations: Array<LocationDescriptor> = [noneLocation, ...locations]
  const displayedWineries: Array<LocationItem> = [allWinery, ...wineries]

  const locationSelectionHandler = (selectedIndex: number) => {
    if (selectedIndex === 0) {
      setWineriesDescriptions(ModelUtils.getItemsDescriptions(wineries));
    }
    else {
      setWineriesDescriptions(ModelUtils.getItemsDescriptionsByLocation(wineries, displayedLocations[selectedIndex].id));
    }
  }

  const winerySelectionHandler = (selectedIndex: number) => {
    alert(`אופציה זאת עדיין לא פעילה.\n כשהיא תושלם יוצגו פרטים של ${selectedIndex > 0 ? "יקב" : ""} ${displayedWineries[selectedIndex].description.name}`);
  }

  if (props.singleApproval !== undefined && props.singleApproval === true) {
    return (
      <div>
        עמוד זה יציג יינות עם הכשר יחיד
      </div>
    )
  }
  else {
    return (
      <div className="wineries-area">
        <div className="app-header-l ibuy-page-header">יקבים</div>
        <div className="ibuy-filter-area">
          <div className="ibuy-filter-area-right">
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
          <div className="ibuy-filter-area-left app-clickable">
            <select className="app-drop-down app-width-100 app-indent-right-16" id="wineries"
              onChange={ (e) => winerySelectionHandler(e.target.selectedIndex) }>
              {
                displayedWineries.map((win: LocationItem) => {
                  return(
                    <option key={ win.id }>{ win.description.name }</option>
                  )
                })
              }
            </select>
          </div>
          <div className="ibuy-filter-area-left app-clickable"
            onClick={() => alert("אופציה זאת עדיין לא פעילה.\n כשהיא תושלם, ייפתח עמוד שמציג מפה של היקבים הנבחרים")}>
            מפה
          </div>
        </div>
        <div className="margin-top-l">
          <FilterBar entries={ [
            ITEM_ATTRIBUTES.OPEN_SATURDAY
          ] } />
        </div>
        <div className="margin-top-l">
          <ItemsView items={ wineriesDescriptions } isLocation={ true } />
        </div>

      </div>
    )
  }
}
