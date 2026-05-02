import { useState } from "react";
import { ItemDescription } from "../../../model/globalObjects"
import { ItemDetails } from "./ItemDetails";
import { ItemsList } from "./ItemsList";
import "./ItemsView.css";

export interface ItemsViewProps {
  items: Array<ItemDescription>;
  isLocation?: boolean;
}

export const ItemsView = (props: ItemsViewProps) => {
  const [shownItemDetails, setShownItemDetails] = 
    useState<ItemDescription | undefined>(undefined);
  const [showDetails, setShowDetails] = useState<string>("items-list-details-popup-hide");

  const selectionHandler = (item: ItemDescription) => {
    setShownItemDetails(item);
    setShowDetails("items-list-details-popup-show")
  }

  const popupCloseHandler = () => {
    setShowDetails("items-list-details-popup-hide");
  }

  return(
    <div>
      <div>
        <ItemsList items={props.items} 
          isLocation={ props.isLocation }
          onSelect={ 
            (item: ItemDescription) => selectionHandler(item) 
          }
        />
      </div>
      <div className={ `items-list-details ${showDetails}` } >
        {
          shownItemDetails !== undefined && 
          <ItemDetails item={shownItemDetails!} closeHandler={ popupCloseHandler } />
        }
      </div>
    </div>
  )
}

