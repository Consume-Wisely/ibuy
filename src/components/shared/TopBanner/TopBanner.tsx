import { useNavigate } from "react-router-dom";
import "./TopBanner.css";

export const TopBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="top-banner app-clickable" onClick={() => navigate("/")}>
      <div className="top-banner-item">
        <img src='resources/icons/ibuy-logo.png' alt='IBuy Logo' 
          height={64} />
      </div>
      <div className="top-banner-text padding-right-s">
        כל יהודי על-פי דרכו
      </div>
    </div>
  )
}