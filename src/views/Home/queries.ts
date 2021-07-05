import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import {
  basicProductFragment,
  productPricingFragment,
} from "../Product/queries";
import { ProductsList } from "./types/ProductsList";

export const homePageQuery = gql`
  ${basicProductFragment}
  ${productPricingFragment}
  query ProductsList {
    shop {
      description
      name
      homepageCollection {
        id
        backgroundImage {
          url
        }
        name
      }
    }
    featuredCategories: menu(name: "Home - Featured Categories") {
      id
      name
      items {
        id
        category {
          id
          name
          slug
          iconImage {
            alt
            url
          }
        }
      }
    }
    featuredBanner: menu(name: "Home - Featured Banner") {
      id
      name
      items {
        id
        category {
          id
          name
          slug
          backgroundImage {
            alt
            url
          }
        }
        collection {
          id
          name
          slug
          backgroundImage {
            alt
            url
          }
        }
      }
    }
    slider: menu(name: "Home - Slider") {
      id
      name
      items {
        id
        name
        category {
          id
          name
          slug
          backgroundImage {
            url
            alt
          }
        }
        collection {
          id
          name
          slug
          backgroundImage {
            url
            alt
          }
        }
        url
      }
    }
    featured2: menu(name: "Home - Featured 2") {
      id
      name
      items {
        id
        name
        category {
          id
          name
          slug
          products(first: 10) {
            edges {
              node {
                ...BasicProductFields
                ...ProductPricingField
                descriptionJson
              }
            }
          }
        }
        collection {
          id
          name
          slug
          products(first: 10) {
            edges {
              node {
                ...BasicProductFields
                ...ProductPricingField
                descriptionJson
              }
            }
          }
        }
      }
    }
  }
`;

export const TypedHomePageQuery = TypedQuery<ProductsList, {}>(homePageQuery);
