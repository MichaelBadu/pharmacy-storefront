import { orderFormUrl } from "@temp/app/routes";
import {
  MainMenu_shop_navigation_main_items_children,
  MainMenu_shop_navigation_main_items_children_category,
  MainMenu_shop_navigation_main_items_children_children, MainMenu_shop_navigation_main_items_children_children_parent,
  MainMenu_shop_navigation_main_items_children_page,
} from "@temp/components/MainMenu/types/MainMenu";

export const itemCategory: MainMenu_shop_navigation_main_items_children_category ={
  __typename: "Category",
  id: 'health',
  name: 'Health',
}

export const itemPage: MainMenu_shop_navigation_main_items_children_page = {
  __typename: "Page",
  slug: './department',
}

export const anotherItemPage: MainMenu_shop_navigation_main_items_children_page = {
  __typename: "Page",
  slug: './department',
}

export const menuItem1: MainMenu_shop_navigation_main_items_children_children_parent = {
  __typename: "MenuItem",
  id: '1',
}

export const itemChildren: MainMenu_shop_navigation_main_items_children_children [] = [
  {
    __typename: "MenuItem",
    id: '1',
    // tslint:disable-next-line:object-literal-sort-keys
    category: itemCategory,
    name: 'Baby',
    url: './baby',
    collection: null,
    page: itemPage,
    parent: menuItem1,
  },
  {
    __typename: "MenuItem",
    id: '6',
    // tslint:disable-next-line:object-literal-sort-keys
    category: itemCategory,
    name: 'Beauty & Personal Care',
    url: './baby',
    collection: null,
    page: itemPage,
    parent: menuItem1,
  },
  {
    __typename: "MenuItem",
    id: '3',
    // tslint:disable-next-line:object-literal-sort-keys
    category: itemCategory,
    name: 'Health & Wellness',
    url: './baby',
    collection: null,
    page: itemPage,
    parent: menuItem1,
  },
  {
    __typename: "MenuItem",
    id: '4',
    // tslint:disable-next-line:object-literal-sort-keys
    name: 'Hair Care',
    // tslint:disable-next-line:object-literal-sort-keys
    category: itemCategory,
    url: './baby',
    collection: null,
    page: itemPage,
    parent: menuItem1,
  },
  {
    __typename: "MenuItem",
    id: '5',
    // tslint:disable-next-line:object-literal-sort-keys
    category: itemCategory,
    name: 'Skin Care',
    url: './baby',
    collection: null,
    page: itemPage,
    parent: menuItem1,
  },
  {
    __typename: "MenuItem",
    id: '6',
    // tslint:disable-next-line:object-literal-sort-keys
    category: itemCategory,
    name: 'Body Hygiene',
    url: './baby',
    collection: null,
    page: itemPage,
    parent: menuItem1,
  },
  ]
export const anotherItemChildren: Array<(MainMenu_shop_navigation_main_items_children_children | null)> = [
  null,
  ]
export const menuItem: MainMenu_shop_navigation_main_items_children = {
  __typename: "MenuItem",
  id: '1',
  // tslint:disable-next-line:object-literal-sort-keys
  category: itemCategory,
  name: 'Shop by department',
  url: './department',
  collection: null,
  page: itemPage,
  parent: null,
  children: itemChildren,
}

export const anotherMenuItem: MainMenu_shop_navigation_main_items_children = {
  __typename: "MenuItem",
  id: '2',
  // tslint:disable-next-line:object-literal-sort-keys
  category: itemCategory,
  name: 'Send your orders & prescriptions',
  url: `${orderFormUrl}`,
  // url: './order-form/',
  collection: null,
  page: anotherItemPage,
  parent: null,
  children:null,
}

export const yetAnotherMenuItem: MainMenu_shop_navigation_main_items_children = {
  __typename: "MenuItem",
  id: '3',
  // tslint:disable-next-line:object-literal-sort-keys
  category: itemCategory,
  name: 'Advice',
  url: './advice',
  collection: null,
  page: anotherItemPage,
  parent: null,
  children:null,
}

