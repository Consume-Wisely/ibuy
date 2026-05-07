import iBuyLogo from "./../assets/images/ibuy-logo.png"
import { useNavigate } from "react-router-dom";
import "./Pages.css";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="app-page">
      <div className="app-indent-top-16">
        <img src={ iBuyLogo } alt='IBuy Logo' 
          height={200}/>
      </div>
          <div className="home-page-menu">
            <div 
              className={ "home-page-menu-item-salute app-clickable app-link" }
              onClick={() => {
                navigate("/salute")
              }}>
              קהילה תומכת
            </div>
            <div 
              className={ "home-page-menu-item app-clickable app-link" }
              onClick={() => {
                navigate("/groceries")
              }}>
              מוצרי צריכה
            </div>
            <div 
              className={ "home-page-menu-item app-clickable app-link" }
              onClick={() => {
                navigate("/wineries")
              }}>
              יקבים
            </div>
            <div 
              className={ "home-page-menu-item app-clickable app-link" }
              onClick={() => {
                navigate("/food-services")
              }}>
              הסעדה
            </div>
            <div 
              className={ "home-page-menu-item app-clickable app-link" }
              onClick={() => {
                navigate("/lodging-services")
              }}>
              נופש
            </div>
            <div 
              className={ "home-page-menu-item app-clickable app-link" }
              onClick={() => {
                navigate("/organizations")
              }}>
              מוצרים לארגונים
            </div>
        </div>
    </div>
  )
}