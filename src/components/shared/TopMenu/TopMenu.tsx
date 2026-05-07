import { useNavigate } from "react-router-dom";
import { ENTRIES } from "../../../utils/constants";
import "./TopMenu.css";

export interface TopMenuProps {
  seletedEntry?: string;
} 

export const TopMenu = (props: TopMenuProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <hr className="top-menu-separator"/>
        <div className="top-menu">
            <div 
              className={`top-menu-item app-clickable app-link ${props.seletedEntry !== undefined && props.seletedEntry === ENTRIES.GROCERIES ? "top-menu-item-selected" : ""}`}
              onClick={() => {
                navigate("/groceries")
              }}>
              מוצרי צריכה
            </div>
            <div 
              className={`top-menu-item app-clickable app-link ${props.seletedEntry !== undefined && props.seletedEntry === ENTRIES.WINERIES ? "top-menu-item-selected" : ""}`}
              onClick={() => {
                navigate("/wineries")
              }}>
              יקבים
            </div>
            <div 
              className={`top-menu-item app-clickable app-link ${props.seletedEntry !== undefined && props.seletedEntry === ENTRIES.FOOD_SERVICES ? "top-menu-item-selected" : ""}`}
              onClick={() => {
                navigate("/food-services")
              }}>
              הסעדה
            </div>
            <div 
              className={`top-menu-item app-clickable app-link ${props.seletedEntry !== undefined && props.seletedEntry === ENTRIES.LODGING_SERVICES ? "top-menu-item-selected" : ""}`}
              onClick={() => {
                navigate("/lodging-services")
              }}>
              נופש
            </div>
        </div>
      <hr className="top-menu-separator"/>
    </div>
  )
}