import { ItemDescription } from "../../../model/globalObjects"
import { LocationsCatalogManager } from "../../../utils/LocationsCatalogManager";
import { ModelVisualUtils } from "../../../utils/ModelVisualUtils";
import "./ItemsView.css";

export interface ItemsViewProps {
  item: ItemDescription;
  closeHandler: Function;
}

export const ItemDetails = (props: ItemsViewProps) => {
  return(
    <div className="item-details-area">
      <div className="app-button-primary-sm" onClick={ () => props.closeHandler() }>
          סגור
      </div>
      <div>
        {          
            <div key={`items-view-${props.item.name}-1`}>
            <div className="items-view-item-titles">
              {props.item.name}
              { props.item.overview !== undefined && props.item.overview.length > 0 &&
                <div className="items-view-item-overview">
                  { props.item.overview }
                </div>
              }
              { props.item.location !== undefined && props.item.location.length > 0 &&
                <div className="items-view-item-overview">
                  { LocationsCatalogManager.getLocationName(props.item.location) }
                </div>
              }
              {
                props.item.attributes.map((attr, i) => {
                  const url = ModelVisualUtils.getAttributeIcon(attr[0]);
                  return(
                    <div key={ i } className="items-view-item-attributes">
                      <img src={url} height="24px" alt={url} className="margin-left-s" />
                      { ModelVisualUtils.getAttributeTitle(attr[0])} 
                      {attr[1].length > 0 ? `: ${attr[1]}` : ""}
                    </div>
                  )
                })
              }
            </div>
            <div className="items-view-images">
              {
                props.item.images !== undefined && props.item.images.length > 0 &&
                  <div>
                    <div className="app-bold padding-bottom-l">המוצר</div>
                    <div> 
                      {
                        props.item.images.map((url: string) => {
                          return <img src={`resources/groceryItemsImages/${url}`} height="150px" alt={url} key={url}/>
                        })
                      } 
                    </div>
                  </div>
              }
              {
                props.item.detailsImages !== undefined && 
                  props.item.detailsImages.length > 0 &&
                  <div className="items-view-attention">
                    <div className="app-show-flex-row app-bold">
                      <div><img src="resources/icons/warning-flag.png" height="32px" alt="warning" /></div>
                      <div className="app-bold padding-bottom-xl padding-right-l">תשומת לב</div>
                    </div>
                    <div> 
                      {
                        props.item.detailsImages.map((url: string) => {
                          return <img src={`resources/groceryItemsImages/${url}`} height="450px" alt={url} 
                            key={`items-view-${url}-1`}/>
                        })
                      } 
                    </div>
                  </div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  )
}

