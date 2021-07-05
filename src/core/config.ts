import { generatePageUrl } from "./utils";

export const BASE_URL = "/";
export const PRODUCTS_PER_PAGE = 6;
export const SUPPORT_EMAIL = "support@example.com";
export const PROVIDERS = {
  BRAINTREE: {
    label: "Braintree",
  },
  DUMMY: {
    label: "Dummy",
  },
  STRIPE: {
    href: "https://js.stripe.com/v3/",
    label: "Stripe",
  },
};
export const STATIC_PAGES = [
  {
    label: "About",
    url: generatePageUrl("about"),
  },
];
export const SOCIAL_MEDIA = [
  {
    ariaLabel: "facebook",
    href: "https://www.facebook.com/",
    path: require("../images/facebook-icon.svg"),
  },
  {
    ariaLabel: "instagram",
    href: "https://www.instagram.com/",
    path: require("../images/instagram-icon.svg"),
  },
  {
    ariaLabel: "twitter",
    href: "https://twitter.com/",
    path: require("../images/twitter-icon.svg"),
  },
  {
    ariaLabel: "whatsapp",
    href: "https://www.whatsapp.com/",
    path: require("../images/whatsapp-icon.svg"),
  },
];
export const META_DEFAULTS = {
  custom: [],
  description:
    "Health And Beauty",
  image: `${window.location.origin}${require("../images/logo.svg")}`,
  title: "Health And Beauty",
  type: "website",
  url: window.location.origin,
};
