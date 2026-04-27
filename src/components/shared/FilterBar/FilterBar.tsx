import { FILTER_ENTRIES } from "../../../utils/constants";
import "./FilterBar.css";

export interface FilterBarProps {
  entries: Array<FILTER_ENTRIES>
}

export const FilterBar = (props: FilterBarProps) => {
  return (
    <div className="filter-bar">
      {
        props.entries.map((entry, i) => {
          return(
            <div className="filter-bar-entry" key={`filter-bar-${entry}`}>
              <div>
                <input type="checkbox" className="filter-bar-entry-checkbox" value="single" />
              </div>
              <div>
                { entry } 
              </div>
            </div>
          )  
        })
      }
      <div className=" app-show-flex">
      <div className="app-button-primary-sm"
        onClick={() => alert("אופציה זאת עדיין לא פעילה.\nכשהיא תושלם ברשימה למטה יופיעו כניסות עפ\"י המסומן")}>
        סנן
      </div>
    </div></div>
  )
}
