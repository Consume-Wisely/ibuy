import { TopBanner } from "../components/shared/TopBanner/TopBanner"
import { TopMenu } from "../components/shared/TopMenu/TopMenu"
import { ENTRIES } from "../utils/constants"
import { Wineries } from "../components/Wineries/Wineries"

export const WineriesPage = () => {
  return (
    <div className="app-page">
      <TopBanner />
      <TopMenu seletedEntry={ ENTRIES.WINERIES } />
      <Wineries />
    </div>
  )
}
