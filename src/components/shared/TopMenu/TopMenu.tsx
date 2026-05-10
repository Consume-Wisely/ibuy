import { useState } from "react";
import { ENTRIES } from "../../../utils/constants";
import { ModelVisualUtils } from "../../../utils/ModelVisualUtils";
import "./TopMenu.css";

export interface TopMenuProps {
  entries: Array<ENTRIES>;
  onSelect: Function;
  seletedEntry?: ENTRIES;
} 

export const TopMenu = (props: TopMenuProps) => {
  const [selectedEntry, setSelectedEntry] = useState<ENTRIES>(
    props.seletedEntry !== undefined ? props.seletedEntry : props.entries[0]
  );

  return (
    <div>
      <div className="top-menu">
      { props.entries.map((entry: ENTRIES) => {
        const title = ModelVisualUtils.getTopMenuEntryTitle(entry);
        return(
          <div
            key={ entry.toString() } 
            className={`top-menu-item app-clickable app-link ${entry !== undefined && selectedEntry === entry ? "top-menu-item-selected" : ""}`}
            onClick={() => {
              if (selectedEntry !== entry) {
                setSelectedEntry(entry);
              }
              props.onSelect(entry)
            }}>
            { title }
          </div>
        )})
      }
      </div>
      <hr className="top-menu-separator"/>
    </div>
  )
}