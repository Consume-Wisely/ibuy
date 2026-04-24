import { GroceryItem } from "../../model/globalObjects"
import { SHOW_WARNINGS } from "../../utils/constants";
import { GroceryItemsCatalogManager } from "../../utils/GroceryItemsCatalogManager";
import "./../../assets/styles/ItemsView.css";

export interface ItemsViewProps {
  items: Array<GroceryItem>;
}

export const ItemsView = (props: ItemsViewProps) => {
  const warningItems: Array<GroceryItem> = 
    GroceryItemsCatalogManager.getWawrningItems(props.items);

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
                    (item: GroceryItem) => {
                      var icons: Array<string> = GroceryItemsCatalogManager.getItemIcons(item);
                      var comments: Array<string> = GroceryItemsCatalogManager.getItemComments(item);
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
          SHOW_WARNINGS === true && warningItems.length > 0 &&
            warningItems.map((item: GroceryItem) => {
              return <div key={item.name}>
                <div className="items-view-item-titles">
                  {item.name} - { item.warningFlag }
                </div>
                <div className="items-view-images">
                  {
                    item.images !== undefined && item.images.length > 0 &&
                      <div>
                        <div className="app-bold padding-bottom-l">המוצר</div>
                        <div> 
                          {
                            item.images.map((url: string) => {
                              return <img src={`resources/groceryItemsImages/${url}`} height="150px" alt={url} key={url}/>
                            })
                          } 
                        </div>
                      </div>
                  }
                  {
                    item.detailsImages !== undefined && item.detailsImages.length > 0 &&
                      <div className="items-view-attention">
                        <div className="app-show-flex-row app-bold">
                          <div><img src="resources/icons/warning-flag.png" height="32px" alt="warning" /></div>
                          <div className="app-bold padding-bottom-xl padding-right-l">תשומת לב</div>
                        </div>
                        <div> 
                          {
                            item.detailsImages.map((url: string) => {
                              return <img src={`resources/groceryItemsImages/${url}`} height="450px" alt={url} key={url}/>
                            })
                          } 
                        </div>
                      </div>
                  }
                </div>
              </div>
            })
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

