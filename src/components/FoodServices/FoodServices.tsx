import { useState } from "react";
import Select from "react-select/dist/declarations/src/Select";
import { ItemDescription, LocationDescriptor, LocationItem } from "../../model/globalObjects";
import { ITEM_ATTRIBUTES } from "../../utils/constants";
import { LocationsCatalogManager } from "../../utils/LocationsCatalogManager";
import { ModelUtils } from "../../utils/ModelUtils";
import { FilterBar } from "../shared/FilterBar/FilterBar";
import { ItemsView } from "../shared/ItemsView/ItemsView";
import "./FoodServices.css";

export interface FoodServicesProps {
  repositoryName: string;
  title: string;
}

export const FoodServices = (props: FoodServicesProps) => {
  const locations: Array<LocationDescriptor> = LocationsCatalogManager.getLocations();
  const providers: Array<LocationItem> = (require(`./../../assets/catalogs/${props.repositoryName}`)).items;
  
  const [providersDescriptions, setProvidersDescriptions] =
    useState<Array<ItemDescription>>(ModelUtils.getItemsDescriptions(providers)); 
  const allWinery: LocationItem = {
    id: "allLocations",
    description: {
      name: "כולם",
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
  const displayedWineries: Array<LocationItem> = [allWinery, ...providers]

  const locationSelectionHandler = (selectedIndex: number) => {
    if (selectedIndex === 0) {
      setProvidersDescriptions(ModelUtils.getItemsDescriptions(providers));
    }
    else {
      setProvidersDescriptions(ModelUtils.getItemsDescriptionsByLocation(providers, displayedLocations[selectedIndex].id));
    }
  }

  const providerSelectionHandler = (selectedIndex: number) => {
    alert(`אופציה זאת עדיין לא פעילה.\n כשהיא תושלם יוצגו פרטים של ${selectedIndex > 0 ? "יקב" : ""} ${displayedWineries[selectedIndex].description.name}`);
  }

  const locationOptions = [
    displayedLocations.map((loc: LocationDescriptor) => {
      return(
        {value: loc.id, label: loc.name }
      )
    })
  ];

  return (
    <div className="wineries-area">
      <div className="app-header-l ibuy-page-header">{ props.title }</div>
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
            onChange={ (e) => providerSelectionHandler(e.target.selectedIndex) }>
            {
              displayedWineries.map((win: LocationItem) => {
                return(
                  <option key={ win.id }>{ win.description.name }</option>
                )
              })
            }
          </select>
        </div>
      </div>
      <div className="margin-top-l">
        <FilterBar entries={ [
          ITEM_ATTRIBUTES.SINGLE_APPROVAL,
          ITEM_ATTRIBUTES.NO_APPROVAL,
          ITEM_ATTRIBUTES.OPEN_SATURDAY
        ] } />
      </div>
      <div className="margin-top-l">
        <ItemsView items={ providersDescriptions } isLocation={ true } />
      </div>

    </div>
  )
}
