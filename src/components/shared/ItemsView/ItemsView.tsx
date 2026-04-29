import { useRef, useState } from "react";
import { ItemDescription } from "../../../model/globalObjects"
import { FILTER_ENTRIES } from "../../../utils/constants";
import "./ItemsView.css";

export interface ItemsViewProps {
  items: Array<ItemDescription>;
  warningItems: Array<ItemDescription>;
}

export const ItemsView = (props: ItemsViewProps) => {
  const [shownItemDetails, setShownItemDetails] = 
    useState<ItemDescription | undefined>(undefined);
  const prevItems = useRef<Array<ItemDescription>>(props.items);
  const showDetails = useRef<boolean>(false);

  if (prevItems.current !== props.items) {
    showDetails.current = false;
    prevItems.current = props.items;
  }

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
                  <th>
                    עדכון אחרון
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  props.items.map(
                    (item: ItemDescription) => {
                      return(
                        <tr key={`items-view-${item.name}`} className="app-clickable" onClick={() => {
                            setShownItemDetails(item);
                            showDetails.current = true;
                          }} >
                          <td>
                            { item.name }
                          </td>
                          <td>
                            <div className="app-center">
                            {
                              item.icons.length > 0 &&
                              item.icons.map((url: string) => {
                                return <img src={url} height="32px" alt={url} 
                                  key={`items-view-${url}`}/>
                              })
                            }
                            </div>
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
          }
        </div>
      <div>
        {
          shownItemDetails !== undefined && showDetails.current === true &&
               <div key={`items-view-${shownItemDetails.name}-1`}>
                <div className="items-view-item-titles">
                  {shownItemDetails.name}
                  {
                    shownItemDetails.comments.map((comment, i) => {
                      const url = shownItemDetails.icons[i];
                      return(
                        <div key={ i } className="items-view-item-comments">
                          <img src={url} height="24px" alt={url} className="margin-left-s" />
                          { comment[0]}: {comment[1]}
                        </div>
                      )
                    })
                  }
                </div>
                <div className="items-view-images">
                  {
                    shownItemDetails.images !== undefined && shownItemDetails.images.length > 0 &&
                      <div>
                        <div className="app-bold padding-bottom-l">המוצר</div>
                        <div> 
                          {
                            shownItemDetails.images.map((url: string) => {
                              return <img src={`resources/groceryItemsImages/${url}`} height="150px" alt={url} key={url}/>
                            })
                          } 
                        </div>
                      </div>
                  }
                  {
                    shownItemDetails.detailsImages !== undefined && 
                      shownItemDetails.detailsImages.length > 0 &&
                      <div className="items-view-attention">
                        <div className="app-show-flex-row app-bold">
                          <div><img src="resources/icons/warning-flag.png" height="32px" alt="warning" /></div>
                          <div className="app-bold padding-bottom-xl padding-right-l">תשומת לב</div>
                        </div>
                        <div> 
                          {
                            shownItemDetails.detailsImages.map((url: string) => {
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

