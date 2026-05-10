import { TopBanner } from "../components/shared/TopBanner/TopBanner"
import { Groceries } from "../components/Groceries/Groceries"

export const SingleApprovalPage = () => {
  return (
    <div className="app-page">
      <TopBanner />
      <div className="app-bold">למידע על יקבים עם הכשר יחיד עברו לעמוד היקבים</div>
        <Groceries />
    </div>
  )
}
