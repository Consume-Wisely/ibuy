import iBuyLogo from "./../assets/images/ibuy-logo.png"
import { useNavigate } from "react-router-dom";
import "./Pages.css";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="app-page">
      <div className="app-indent-top-16">
        <img src={ iBuyLogo } alt='IBuy Logo' 
          height={300}/>
      </div>
          <div className="home-page-menu">
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
                navigate("/services")
              }}>
              נותני שירותים
            </div>
        </div>
    </div>
  )
}