import { TopBanner } from "../components/shared/TopBanner/TopBanner"
import { TopMenu } from "../components/shared/TopMenu/TopMenu"
import { ENTRIES } from "../utils/constants"
import { Groceries } from "./../components/Groceries/Groceries"

export const GroceriesPage = () => {
  return (
    <div className="app-page">
      <TopBanner />
      <TopMenu seletedEntry={ ENTRIES.GROCERIES } />
      <Groceries />
    </div>
  )
}
