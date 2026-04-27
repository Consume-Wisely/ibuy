import { ItemDescription } from "../../../model/globalObjects"
import { FILTER_ENTRIES, SHOW_WARNINGS } from "../../../utils/constants";
import "./ItemsView.css";

export interface ItemsViewProps {
  items: Array<ItemDescription>;
  warningItems: Array<ItemDescription>;
}

export const ItemsView = (props: ItemsViewProps) => {
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
                    (item: ItemDescription) => {
                      return(
                        <tr key={`items-view-${item.name}`}>
                          <td>{ item.name }</td>
                          <td>
                            {
                              item.icons.length > 0 &&
                              item.icons.map((url: string) => {
                                return <img src={url} height="32px" alt={url} 
                                  key={`items-view-${url}`}/>
                              })
                            }
                          </td>
                          <td>
                            {
                              item.comments.length > 0 &&
                              item.comments.map(([title, comment]: [FILTER_ENTRIES, string]) => {
                                return (
                                  <span key={ `items-view-${title}` }>
                                    <span className="app-bold">{ title } - </span>
                                    <span> { comment } </span>
                                  </span>
                                ) 
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
          SHOW_WARNINGS === true && props.warningItems.length > 0 &&
            props.warningItems.map((item: ItemDescription) => {
              return <div key={`items-view-${item.name}-1`}>
                <div className="items-view-item-titles">
                  {item.name} - { item.comments[0][0]}: {item.comments[0][1]}
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
                              return <img src={`resources/groceryItemsImages/${url}`} height="450px" alt={url} 
                                key={`items-view-${url}-1`}/>
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

