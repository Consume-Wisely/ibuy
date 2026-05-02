import { ITEM_ATTRIBUTES } from "../utils/constants";

export interface ItemDescription {
  name: string;
  overview: string;
  location?: string;
  attributes: Array<[ITEM_ATTRIBUTES, string]>;
  lastUpdate: string;
  images?: Array<string>;
  detailsImages?: Array<string>;
}

export interface GroceryCategoryDedscriptor {
  id: string;
  name: string;
  subCategories: Array<string>;
}

export interface GroceryCategory {
  categoryId: string;
  subCategory?: string;
}

export interface GroceryItem {
  category: string;
  subCategory?: string;
  id: string;
  description: ItemDescription;
}

export interface LocationDescriptor {
  id: string,
  name: string
}

export interface LocationItem {
  id: string;
  description: ItemDescription;
}