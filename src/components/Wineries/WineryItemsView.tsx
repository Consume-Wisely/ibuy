import { GroceryItem, WineryItem } from "../../model/globalObjects"
import { GroceryItemsCatalogManager } from "../../utils/GroceryItemsCatalogManager";
import { WineryItemsCatalogManager } from "../../utils/WineryItemsCatalogManager";
import "./../../assets/styles/ItemsView.css";

export interface WineryItemsViewProps {
  items: Array<WineryItem>;
}

export const WineryItemsView = (props: WineryItemsViewProps) => {
  return(
    <div>
      <div>
        {
          props.items.length > 0 &&
            <table className="app-table">
              <thead>
                <tr>
                  <th>
                    שם
                  </th>
                  <th>
                    
                  </th>
                  <th>
                    הערות
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  props.items.map(
                    (item: WineryItem) => {
                      var icons: Array<string> = WineryItemsCatalogManager.getItemIcons(item);
                      var comments: Array<string> = WineryItemsCatalogManager.getItemComments(item);
                      return(
                        <tr key={item.name}>
                          <td>{ item.name }</td>
                          <td>
                            {
                              icons.length > 0 &&
                              icons.map((url: string) => {
                                return <img src={url} height="32px" alt={url} key={url}/>
                              })
                            }
                          </td>
                          <td>
                            {
                              comments.length > 0 &&
                              comments.map((comment: string) => {
                                return `${comment}   `
                              })
                            }

                          </td>
                        </tr>
                      )
                    }
                  )
                }
              </tbody>
            </table>
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

