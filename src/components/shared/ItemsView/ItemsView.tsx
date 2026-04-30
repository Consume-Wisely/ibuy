import { useRef, useState } from "react";
import { ItemDescription } from "../../../model/globalObjects"
import { ItemDetails } from "./ItemDetails";
import { ItemsList } from "./ItemsList";
import "./ItemsView.css";

export interface ItemsViewProps {
  items: Array<ItemDescription>;
}

export const ItemsView = (props: ItemsViewProps) => {
  const [shownItemDetails, setShownItemDetails] = 
    useState<ItemDescription | undefined>(undefined);
  const prevItems = useRef<Array<ItemDescription>>(props.items);
  const showDetails = useRef<boolean>(false);

  const selectionHandler = (item: ItemDescription) => {
    setShownItemDetails(item);
    showDetails.current = true;
  }

  if (prevItems.current !== props.items) {
    showDetails.current = false;
    prevItems.current = props.items;
  }

  return(
    <div>
      <div>
        <ItemsList items={props.items} onSelect={ (item: ItemDescription) => selectionHandler(item) } />
      </div>
      <div>
        {
          shownItemDetails !== undefined && showDetails.current === true &&
          <ItemDetails item={shownItemDetails!} />
        }
      </div>
    </div>
  )
}

