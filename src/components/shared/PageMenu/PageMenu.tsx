import { MenuEntry } from "../../../model/uiObjects";
import { PAGE_MENU_ENTRIES } from "../../../utils/constants";
import "./PageMenu.css";

export interface PageMenuProps {
  menuEntries: Array<MenuEntry>;
  selectionHandler: Function;
  selectedEntry?: PAGE_MENU_ENTRIES;
} 

export const PageMenu = (props: PageMenuProps) => {
  return (
    <div>
        <div className="page-menu">
          {props.menuEntries.map((entry: MenuEntry) => {
            return(
            <div key={entry.entryId}
              className={`page-menu-item app-clickable app-link ${props.selectedEntry !== undefined && props.selectedEntry === entry.entryId ? "page-menu-item-selected" : ""}`}
              onClick={() => {
                props.selectionHandler(entry.entryId)
              }}>
              { entry.title }
            </div>
            )}
          )}
        </div>
    </div>
  )
}