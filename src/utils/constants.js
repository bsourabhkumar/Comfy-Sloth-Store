import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/"
  },
  {
    id: 2,
    text: "about",
    url: "/about"
  },
  {
    id: 3,
    text: "products",
    url: "/products"
  }
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text:
      "Committed to crafting products from the best quality materials to give you furniture that will last a lifetime"
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text:
      "To give our customers the best possible product not only best in terms of looks but also performance. We believe you are forming a long association with our furniture"
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text:
      "Established in 2007 with the sole aim of creating best product with a small team and a great dream of providing a connection to our customers with our best design and material"
  }
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
