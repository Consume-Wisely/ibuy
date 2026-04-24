import { TopBanner } from "../components/shared/TopBanner/TopBanner"
import { TopMenu } from "../components/shared/TopMenu/TopMenu"
import { ENTRIES } from "../utils/constants"
import { Services } from "./../components/Services/Services"

export const ServicesPage = () => {
  return (
    <div className="app-page">
      <TopBanner />
      <TopMenu seletedEntry={ ENTRIES.SERVICES } />
      <Services />
    </div>
  )
}
