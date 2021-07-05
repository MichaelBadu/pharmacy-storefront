/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductsList
// ====================================================

export interface ProductsList_shop_homepageCollection_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductsList_shop_homepageCollection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage | null;
  name: string;
}

export interface ProductsList_shop {
  __typename: "Shop";
  /**
   * Shop's description.
   */
  description: string | null;
  /**
   * Shop's name.
   */
  name: string;
  /**
   * Collection displayed on homepage.
   */
  homepageCollection: ProductsList_shop_homepageCollection | null;
}

export interface ProductsList_featuredCategories_items_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
}

export interface ProductsList_featuredCategories_items {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
  category: ProductsList_featuredCategories_items_category | null;
}

export interface ProductsList_featuredCategories {
  __typename: "Menu";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  items: (ProductsList_featuredCategories_items | null)[] | null;
}

export interface ProductsList_featuredBanner_items_category_backgroundImage {
  __typename: "Image";
  /**
   * Alt text for an image.
   */
  alt: string | null;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductsList_featuredBanner_items_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  backgroundImage: ProductsList_featuredBanner_items_category_backgroundImage | null;
}

export interface ProductsList_featuredBanner_items_collection_backgroundImage {
  __typename: "Image";
  /**
   * Alt text for an image.
   */
  alt: string | null;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductsList_featuredBanner_items_collection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  backgroundImage: ProductsList_featuredBanner_items_collection_backgroundImage | null;
}

export interface ProductsList_featuredBanner_items {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
  category: ProductsList_featuredBanner_items_category | null;
  collection: ProductsList_featuredBanner_items_collection | null;
}

export interface ProductsList_featuredBanner {
  __typename: "Menu";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  items: (ProductsList_featuredBanner_items | null)[] | null;
}

export interface ProductsList_slider_items_category_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface ProductsList_slider_items_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  backgroundImage: ProductsList_slider_items_category_backgroundImage | null;
}

export interface ProductsList_slider_items_collection_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface ProductsList_slider_items_collection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  backgroundImage: ProductsList_slider_items_collection_backgroundImage | null;
}

export interface ProductsList_slider_items {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  category: ProductsList_slider_items_category | null;
  collection: ProductsList_slider_items_collection | null;
  /**
   * URL to the menu item.
   */
  url: string | null;
}

export interface ProductsList_slider {
  __typename: "Menu";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  items: (ProductsList_slider_items | null)[] | null;
}

export interface ProductsList_featured2_items_category_products_edges_node_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface ProductsList_featured2_items_category_products_edges_node_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted_start_net;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted_stop_net;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRange_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRange_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductsList_featured2_items_category_products_edges_node_pricing_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductsList_featured2_items_category_products_edges_node_pricing_priceRange_start_net;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRange_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRange_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductsList_featured2_items_category_products_edges_node_pricing_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductsList_featured2_items_category_products_edges_node_pricing_priceRange_stop_net;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductsList_featured2_items_category_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductsList_featured2_items_category_products_edges_node_pricing_priceRange_stop | null;
}

export interface ProductsList_featured2_items_category_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductsList_featured2_items_category_products_edges_node_pricing_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: ProductsList_featured2_items_category_products_edges_node_pricing_priceRange | null;
}

export interface ProductsList_featured2_items_category_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: ProductsList_featured2_items_category_products_edges_node_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: ProductsList_featured2_items_category_products_edges_node_thumbnail2x | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductsList_featured2_items_category_products_edges_node_pricing | null;
  descriptionJson: any;
}

export interface ProductsList_featured2_items_category_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductsList_featured2_items_category_products_edges_node;
}

export interface ProductsList_featured2_items_category_products {
  __typename: "ProductCountableConnection";
  edges: ProductsList_featured2_items_category_products_edges[];
}

export interface ProductsList_featured2_items_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  /**
   * List of products in the category.
   */
  products: ProductsList_featured2_items_category_products | null;
}

export interface ProductsList_featured2_items_collection_products_edges_node_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface ProductsList_featured2_items_collection_products_edges_node_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted_start_net;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted_stop_net;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange_start_net;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange_stop_net;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange_stop | null;
}

export interface ProductsList_featured2_items_collection_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: ProductsList_featured2_items_collection_products_edges_node_pricing_priceRange | null;
}

export interface ProductsList_featured2_items_collection_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: ProductsList_featured2_items_collection_products_edges_node_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: ProductsList_featured2_items_collection_products_edges_node_thumbnail2x | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductsList_featured2_items_collection_products_edges_node_pricing | null;
  descriptionJson: any;
}

export interface ProductsList_featured2_items_collection_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductsList_featured2_items_collection_products_edges_node;
}

export interface ProductsList_featured2_items_collection_products {
  __typename: "ProductCountableConnection";
  edges: ProductsList_featured2_items_collection_products_edges[];
}

export interface ProductsList_featured2_items_collection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  /**
   * List of products in this collection.
   */
  products: ProductsList_featured2_items_collection_products | null;
}

export interface ProductsList_featured2_items {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  category: ProductsList_featured2_items_category | null;
  collection: ProductsList_featured2_items_collection | null;
}

export interface ProductsList_featured2 {
  __typename: "Menu";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  items: (ProductsList_featured2_items | null)[] | null;
}

export interface ProductsList {
  /**
   * Return information about the shop.
   */
  shop: ProductsList_shop;
  /**
   * Look up a navigation menu by ID or name.
   */
  featuredCategories: ProductsList_featuredCategories | null;
  /**
   * Look up a navigation menu by ID or name.
   */
  featuredBanner: ProductsList_featuredBanner | null;
  /**
   * Look up a navigation menu by ID or name.
   */
  slider: ProductsList_slider | null;
  /**
   * Look up a navigation menu by ID or name.
   */
  featured2: ProductsList_featured2 | null;
}
