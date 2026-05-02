import { ItemDescription } from "../../../model/globalObjects"
import { ITEM_ATTRIBUTES } from "../../../utils/constants";
import { LocationsCatalogManager } from "../../../utils/LocationsCatalogManager";
import { ModelVisualUtils } from "../../../utils/ModelVisualUtils";
import "./ItemsView.css";

export interface ItemsViewProps {
  items: Array<ItemDescription>;
  isLocation?: boolean;
  onSelect: Function;
}

export const ItemsList = (props: ItemsViewProps) => {
  const maxAttrLength = 25;

  return(
    <div>
      <div>
        {
          props.items.length > 0 &&
          <div>
            <div className="app-show-flex app-indent-right-08 margin-bottom-xs">
              <img src="resources/icons/info.png" height={"16px"} alt="info"/>
              <div className="app-indent-right-08 font-size-s">
                הקלק על שורה לראות פרטים נוספים
              </div>
            </div>
            <table className="app-table items-list-table">
              <thead>
                <tr>
                  <th>
                    שם
                  </th>
                  { props.isLocation !== undefined && props.isLocation === true &&
                    <th>
                      מקום
                    </th>
                  }
                  <th>
                    
                  </th>
                  <th>
                    הערות
                  </th>
                  <th>
                    עדכון אחרון
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  props.items.map(
                    (item: ItemDescription) => {
                      const icons = ModelVisualUtils.getItemIcons(item.attributes);
                      return(
                        <tr key={`items-view-${item.name}`} className="app-clickable" onClick={() => {
                            props.onSelect(item);
                          }} >
                          <td>
                            { item.name }
                          </td>
                          { props.isLocation !== undefined && props.isLocation === true &&
                            <td>
                              { LocationsCatalogManager.getLocationName(item.location) }
                            </td>
                          }
                          <td>
                            <div className="app-center">
                            {
                              icons.length > 0 &&
                              icons.map((url: string) => {
                                return <img src={url} height="32px" alt={url} 
                                  key={`items-view-${url}`}/>
                              })
                            }
                            </div>
                          </td>
                          <td>
                            {
                              item.attributes.length > 0 &&
                              item.attributes.map(([title, attr]: [ITEM_ATTRIBUTES, string]) => {
                                return (
                                  <span key={ `items-view-${title}` }>
                                    <span className="app-bold margin-right-s">{ ModelVisualUtils.getAttributeTitle(title) }</span>
                                    <span> {attr.length === 0 ? ""
                                      : (attr.length > maxAttrLength ? ` - ${attr.substring(0,maxAttrLength-1)}...`
                                      : ` - ${attr}`)
                                    } </span>
                                  </span>
                                ) 
                              })
                            }

                          </td>
                          <td>
                            <div className="app-center">                           
                              { item.lastUpdate }
                            </div>
                          </td>
                        </tr>
                      )
                    }
                  )
                }
              </tbody>
            </table>
            </div>
          }
        </div>
        <div>
        {
          props.items.length === 0 &&
            <div className="app-header-m">
              לא נמצאו מוצרים התואמים למה שחיפשת
            </div>
        }
        </div>
    </div>
  )
}

