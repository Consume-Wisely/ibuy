import { FILTER_ENTRIES } from "../utils/constants";

export interface ItemDescription {
  name: string;
  icons: Array<string>;
  comments: Array<[FILTER_ENTRIES, string]>;
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
  name: string;
  lastUpdate: string;
  images?: Array<string>;
  singleApproval?: string;
  noApproval?: string;
  notQualified?: boolean;
  warningFlag?: string; 
  detailsImages?: Array<string>;
}

export interface LocationDescriptor {
  id: string,
  name: string
}

export interface WineryItem {
  location: string;
  id: string;
  name: string;
  lastUpdate: string;
  images?: Array<string>;
  singleApproval?: string;
  noApproval?: string;
  notQualified?: boolean;
  openSaturday?: string;
  warningFlag?: string; 
  detailsImages?: Array<string>;
}

export interface RestaurantItem {
  location: string;
  id: string;
  name: string;
  lastUpdate: string;
  images?: Array<string>;
  singleApproval?: string;
  noApproval?: string;
  fullServiceOnSaturday?: string;
  notQualified?: boolean;
  openSaturday?: string;
  Tzohar?: boolean;
  warningFlag?: string; 
  detailsImages?: Array<string>;
}