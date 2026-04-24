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
              className={`top-menu-item app-clickable app-link ${props.seletedEntry !== undefined && props.seletedEntry === ENTRIES.SERVICES ? "top-menu-item-selected" : ""}`}
              onClick={() => {
                navigate("/services")
              }}>
              נותני שירותים
            </div>
        </div>
      <hr className="top-menu-separator"/>
    </div>
  )
}