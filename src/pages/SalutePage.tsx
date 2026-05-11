import { ItemsView } from "../components/shared/ItemsView/ItemsView"
import { TopBanner } from "../components/shared/TopBanner/TopBanner"
import { ItemDescription } from "../model/globalObjects";
import { ModelUtils } from "../utils/ModelUtils";
import "./../assets/styles/ibuy.css"

export const SalutePage = () => {
  const locations = require("./../assets/catalogs/saluteItemsCatalog.json");
  const locationDescriptions: Array<ItemDescription> = ModelUtils.getItemsDescriptions(locations.items)

  return (
    <div className="app-page">
      <TopBanner />
      <div className="margin-top-s">
        <ItemsView items={ locationDescriptions } isLocation={ true } showOverview={ true } />
      </div>
    </div>
  )
}
